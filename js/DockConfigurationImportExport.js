// 🧠 Define the keys you care about (adjust if needed)
const dockKeys = [
  'label_a', 'website_a', 'label_b', 'website_b', 'label_c', 'website_c',
  // ... add all keys you want saved
];

// 🔁 Export logic
$('#export_config_btn').on('click', function () {
  const rows = [['key', 'value']]; // header row
  dockKeys.forEach(key => {
    if (window[key] !== undefined) {
      rows.push([key, window[key]]);
    }
  });

  const csvContent = rows.map(r => r.join(',')).join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = 'dock_config.csv';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
});

// 🔁 Import logic
$('#import_config_btn').on('click', function () {
  $('#import_config_input').click();
});

$('#import_config_input').on('change', function (e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function (e) {
    const lines = e.target.result.split('\n');
    lines.forEach((line, index) => {
      if (index === 0) return; // Skip header
      const [key, value] = line.split(',');
      if (dockKeys.includes(key)) {
        window[key] = value.trim();
      }
    });

    console.log('✅ Dock configuration imported.');
    // You can now optionally call update functions like:
    // refreshDockDisplay(); 
  };
  reader.readAsText(file);
});
