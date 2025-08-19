// === Google Calendar JSON Import (button: #import_calendar_json_button) ===

window._imported_google_events = []; // normalized, ready for your mapper
window.google_calendar_import = {
  last_file_name: null,
  last_import_count: 0,
  last_error: null,
  last_saved_at: null
};

/** Normalize a Google Calendar API event to a compact shape */
window._normalize_gcal_event = function _normalize_gcal_event(e) {
  // detect all-day vs timed
  const hasDateOnly = e?.start?.date || e?.end?.date;
  const startIso = e?.start?.dateTime || e?.start?.date || null;
  const endIso   = e?.end?.dateTime   || e?.end?.date   || null;

  // Parse dates. For all-day (YYYY-MM-DD), treat as local midnight(s).
  const parseIso = (iso, allDay) => {
    if (!iso) return null;
    if (allDay && /^\d{4}-\d{2}-\d{2}$/.test(iso)) {
      // local midnight for start of that date
      const [y,m,d] = iso.split('-').map(Number);
      return new Date(y, m - 1, d, 0, 0, 0, 0);
    }
    return new Date(iso);
  };

  const start = parseIso(startIso, hasDateOnly);
  let end = parseIso(endIso, hasDateOnly);

  // Google all-day end is exclusive; often next day 00:00
  // Keep as-is, but compute a convenience duration if both exist.
  const durationMs = (start && end) ? (end.getTime() - start.getTime()) : null;

  return {
    id: e.id || (e.summary ? `${e.summary}-${start?.toISOString() || Math.random()}` : Math.random().toString(36).slice(2)),
    status: e.status || 'confirmed',
    summary: e.summary || '(no title)',
    description: e.description || '',
    location: e.location || '',
    start: start ? start.toISOString() : null,
    end: end ? end.toISOString() : null,
    startMs: start ? start.getTime() : null,
    endMs: end ? end.getTime() : null,
    allDay: !!hasDateOnly,
    timeZone: e?.start?.timeZone || e?.end?.timeZone || null,
    colorId: e.colorId || null,
    recurringEventId: e.recurringEventId || null,
    recurrence: Array.isArray(e.recurrence) ? e.recurrence.slice() : null,
    attendees: Array.isArray(e.attendees)
      ? e.attendees.map(a => ({ email: a.email, response: a.responseStatus, self: !!a.self }))
      : null,
    reminders: e.reminders || null,
    hangoutLink: e.hangoutLink || null,
    transparency: e.transparency || null,
    raw: e // keep original for any advanced mapping later
  };
};

/** Pull an array of events from various JSON shapes */
window._extract_gcal_events = function _extract_gcal_events(json) {
  if (!json) return [];

  // Google Calendar list response
  if (Array.isArray(json.items)) return json.items;

  // Direct array of events
  if (Array.isArray(json)) return json;

  // Single event
  if (json.kind === 'calendar#event' || json.start || json.end) return [json];

  // Some exports may use { events: [...] }
  if (Array.isArray(json.events)) return json.events;

  return [];
};

/** Main import function */
window.import_google_calendar_json = function import_google_calendar_json(callback) {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'application/json,.json';

  input.onchange = (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      try {
        const text = reader.result;
        const parsed = JSON.parse(text);

        const events = window._extract_gcal_events(parsed);
        if (!events.length) {
          throw new Error('No events found in the provided JSON.');
        }

        // Optionally skip canceled events here:
        const filtered = events.filter(ev => (ev.status || 'confirmed') !== 'cancelled');

        const normalized = filtered.map(window._normalize_gcal_event);

        window._imported_google_events = normalized;
        window.google_calendar_import.last_file_name = file.name;
        window.google_calendar_import.last_import_count = normalized.length;
        window.google_calendar_import.last_error = null;

        // Persist locally (avoid sync quota)
        if (chrome?.storage?.local) {
          const payload = {
            imported_google_events: normalized,
            imported_google_events_meta: {
              file: file.name,
              imported_at: new Date().toISOString()
            }
          };
          chrome.storage.local.set(payload, () => {
            window.google_calendar_import.last_saved_at = new Date().toISOString();
            console.log(`📥 Imported ${normalized.length} events from ${file.name}`);
            if (typeof callback === 'function') callback(null, normalized);
            // If you already have a mapper, you can call it here:
            // if (typeof window.map_imported_events_to_dictionary === 'function') {
            //   window.map_imported_events_to_dictionary(normalized);
            // }
            $('#calendar_import_message').text(`Imported ${normalized.length} events`).fadeIn().delay(2000).fadeOut();
          });
        } else {
          console.log(`📥 Imported ${normalized.length} events from ${file.name} (not persisted)`);
          if (typeof callback === 'function') callback(null, normalized);
        }

      } catch (err) {
        console.error('❌ Calendar import failed:', err);
        window.google_calendar_import.last_error = String(err && err.message || err);
        if (typeof callback === 'function') callback(err);
        $('#calendar_import_message').text('Import failed: ' + window.google_calendar_import.last_error).fadeIn().delay(3000).fadeOut();
      }
    };

    reader.onerror = () => {
      const msg = 'File read error.';
      console.error('❌', msg);
      window.google_calendar_import.last_error = msg;
      if (typeof callback === 'function') callback(new Error(msg));
    };

    reader.readAsText(file);
  };

  input.click();
};


