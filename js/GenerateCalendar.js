
function getCurrentYear() {
  return new Date().getFullYear();
}

current_year = getCurrentYear()
next_year = current_year+1

function getDayOfWeek(year, month, day) {
  // In JavaScript, months are 0-indexed: 0 = January, 11 = December
  const date = new Date(year, month - 1, day);
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return days[date.getDay()];
}

function getDaysInFebruary(year) {
  return new Date(year, 2, 0).getDate();
}

DaysInFebruary_CurrentYear = getDaysInFebruary(current_year)
DaysInFebruary_NextYear = getDaysInFebruary(next_year)

function generateCalendarArray(startDay, daysInMonth) {
  const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const startIndex = weekdays.indexOf(startDay);
  const result = [];

  // Fill initial empty slots before the first of the month
  for (let i = 0; i < startIndex; i++) {
    result.push("");
  }

  // Fill days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    result.push(day);
  }

  // Fill remaining empty slots up to 42 total
  while (result.length < 42) {
    result.push("");
  }

  return result;
}

// Calendar day of the month arrays
// current year
January_day_of_month_array_current_year = generateCalendarArray(getDayOfWeek(current_year,1,1), 31)
February_day_of_month_array_current_year = generateCalendarArray(getDayOfWeek(current_year,2,1), DaysInFebruary_CurrentYear)
March_day_of_month_array_current_year = generateCalendarArray(getDayOfWeek(current_year,3,1), 31)
April_day_of_month_array_current_year = generateCalendarArray(getDayOfWeek(current_year,4,1), 30)
May_day_of_month_array_current_year = generateCalendarArray(getDayOfWeek(current_year,5,1), 31)
June_day_of_month_array_current_year = generateCalendarArray(getDayOfWeek(current_year,6,1), 30)
July_day_of_month_array_current_year = generateCalendarArray(getDayOfWeek(current_year,7,1), 31)
August_day_of_month_array_current_year = generateCalendarArray(getDayOfWeek(current_year,8,1), 31)
September_day_of_month_array_current_year = generateCalendarArray(getDayOfWeek(current_year,9,1), 30)
October_day_of_month_array_current_year = generateCalendarArray(getDayOfWeek(current_year,10,1), 31)
November_day_of_month_array_current_year = generateCalendarArray(getDayOfWeek(current_year,11,1), 30)
December_day_of_month_array_current_year = generateCalendarArray(getDayOfWeek(current_year,12,1), 31)

// next year
January_day_of_month_array_next_year = generateCalendarArray(getDayOfWeek(next_year,1,1), 31)
February_day_of_month_array_next_year = generateCalendarArray(getDayOfWeek(next_year,2,1), DaysInFebruary_CurrentYear)
March_day_of_month_array_next_year = generateCalendarArray(getDayOfWeek(next_year,3,1), 31)
April_day_of_month_array_next_year = generateCalendarArray(getDayOfWeek(next_year,4,1), 30)
May_day_of_month_array_next_year = generateCalendarArray(getDayOfWeek(next_year,5,1), 31)
June_day_of_month_array_next_year = generateCalendarArray(getDayOfWeek(next_year,6,1), 30)
July_day_of_month_array_next_year = generateCalendarArray(getDayOfWeek(next_year,7,1), 31)
August_day_of_month_array_next_year = generateCalendarArray(getDayOfWeek(next_year,8,1), 31)
September_day_of_month_array_next_year = generateCalendarArray(getDayOfWeek(next_year,9,1), 30)
October_day_of_month_array_next_year = generateCalendarArray(getDayOfWeek(next_year,10,1), 31)
November_day_of_month_array_next_year = generateCalendarArray(getDayOfWeek(next_year,11,1), 30)
December_day_of_month_array_next_year = generateCalendarArray(getDayOfWeek(next_year,12,1), 31)

function calculateWeekSpan(calendarArray) {
  let lastFilledIndex = -1;

  for (let i = calendarArray.length - 1; i >= 0; i--) {
    if (calendarArray[i] !== "") {
      lastFilledIndex = i;
      break;
    }
  }

  if (lastFilledIndex === -1) return 0; // no days found

  return Math.ceil((lastFilledIndex + 1) / 7);
}

// Week Spans
// Current Year
January_week_span_current_year = calculateWeekSpan(January_day_of_month_array_current_year)
February_week_span_current_year = calculateWeekSpan(February_day_of_month_array_current_year)
March_week_span_current_year = calculateWeekSpan(March_day_of_month_array_current_year)
April_week_span_current_year = calculateWeekSpan(April_day_of_month_array_current_year)
May_week_span_current_year = calculateWeekSpan(May_day_of_month_array_current_year)
June_week_span_current_year = calculateWeekSpan(June_day_of_month_array_current_year)
July_week_span_current_year = calculateWeekSpan(July_day_of_month_array_current_year)
August_week_span_current_year = calculateWeekSpan(August_day_of_month_array_current_year)
September_week_span_current_year = calculateWeekSpan(September_day_of_month_array_current_year)
October_week_span_current_year = calculateWeekSpan(October_day_of_month_array_current_year)
November_week_span_current_year = calculateWeekSpan(November_day_of_month_array_current_year)
December_week_span_current_year = calculateWeekSpan(December_day_of_month_array_current_year)

// next year
January_week_span_next_year = calculateWeekSpan(January_day_of_month_array_next_year)
February_week_span_next_year = calculateWeekSpan(February_day_of_month_array_next_year)
March_week_span_next_year = calculateWeekSpan(March_day_of_month_array_next_year)
April_week_span_next_year = calculateWeekSpan(April_day_of_month_array_next_year)
May_week_span_next_year = calculateWeekSpan(May_day_of_month_array_next_year)
June_week_span_next_year = calculateWeekSpan(June_day_of_month_array_next_year)
July_week_span_next_year = calculateWeekSpan(July_day_of_month_array_next_year)
August_week_span_next_year = calculateWeekSpan(August_day_of_month_array_next_year)
September_week_span_next_year = calculateWeekSpan(September_day_of_month_array_next_year)
October_week_span_next_year = calculateWeekSpan(October_day_of_month_array_next_year)
November_week_span_next_year = calculateWeekSpan(November_day_of_month_array_next_year)
December_week_span_next_year = calculateWeekSpan(December_day_of_month_array_next_year)

//////////////////////
// Create Calendars // 
//////////////////////

//////////////////
// Current Year //
//////////////////

const dictionary_library_current_year = [
  { 
    "month": ["January"],
    "year": [current_year],
    "days_in_month": [31],
    "week_span": [January_week_span_current_year],
    "day_of_month_array": [January_day_of_month_array_current_year]
  },
  {
    "month": ["February"],
    "year": [current_year],
    "days_in_month": [DaysInFebruary_CurrentYear],
    "week_span": [February_week_span_next_year],
    "day_of_month_array": [February_day_of_month_array_current_year]
  },
  {
    "month": ["March"],
    "year": [current_year],
    "days_in_month": [31],
    "week_span": [March_week_span_next_year],
    "day_of_month_array": [March_day_of_month_array_current_year]
  },
  { 
    "month": ["April"],
    "year": [current_year],
    "days_in_month": [30],
    "week_span": [April_week_span_next_year],
    "day_of_month_array": [April_day_of_month_array_current_year]
  },
  {
    "month": ["May"],
    "year": [current_year],
    "days_in_month": [31],
    "week_span": [May_week_span_next_year],
    "day_of_month_array": [May_day_of_month_array_current_year]
  },
  {
    "month": ["June"],
    "year": [current_year],
    "days_in_month": [30],
    "week_span": [June_week_span_next_year],
    "day_of_month_array": [June_day_of_month_array_current_year]
  },
  { 
    "month": ["July"],
    "year": [current_year],
    "days_in_month": [31],
    "week_span": [July_week_span_next_year],
    "day_of_month_array": [July_day_of_month_array_current_year]
  },
  {
    "month": ["August"],
    "year": [current_year],
    "days_in_month": [31],
    "week_span": [August_week_span_next_year],
    "day_of_month_array": [August_day_of_month_array_current_year]
  },
  {
    "month": ["September"],
    "year": [current_year],
    "days_in_month": [30],
    "week_span": [September_week_span_next_year],
    "day_of_month_array": [September_day_of_month_array_current_year]
  },
  { 
    "month": ["October"],
    "year": [current_year],
    "days_in_month": [31],
    "week_span": [October_week_span_next_year],
    "day_of_month_array": [October_day_of_month_array_current_year]
  },
  {
    "month": ["November"],
    "year": [current_year],
    "days_in_month": [30],
    "week_span": [November_week_span_next_year],
    "day_of_month_array": [November_day_of_month_array_current_year]
  },
  {
    "month": ["December"],
    "year": [current_year],
    "days_in_month": [31],
    "week_span": [December_week_span_next_year],
    "day_of_month_array": [December_day_of_month_array_current_year]
  }
]

const dictionary_library_next_year = [
  { 
    "month": ["January"],
    "year": [next_year],
    "days_in_month": [31],
    "week_span": [January_week_span_next_year],
    "day_of_month_array": [January_day_of_month_array_next_year]
  },
  {
    "month": ["February"],
    "year": [next_year],
    "days_in_month": [DaysInFebruary_CurrentYear],
    "week_span": [February_week_span_next_year],
    "day_of_month_array": [February_day_of_month_array_next_year]
  },
  {
    "month": ["March"],
    "year": [next_year],
    "days_in_month": [31],
    "week_span": [March_week_span_next_year],
    "day_of_month_array": [March_day_of_month_array_next_year]
  },
  { 
    "month": ["April"],
    "year": [next_year],
    "days_in_month": [30],
    "week_span": [April_week_span_next_year],
    "day_of_month_array": [April_day_of_month_array_next_year]
  },
  {
    "month": ["May"],
    "year": [next_year],
    "days_in_month": [31],
    "week_span": [May_week_span_next_year],
    "day_of_month_array": [May_day_of_month_array_next_year]
  },
  {
    "month": ["June"],
    "year": [next_year],
    "days_in_month": [30],
    "week_span": [June_week_span_next_year],
    "day_of_month_array": [June_day_of_month_array_next_year]
  },
  { 
    "month": ["July"],
    "year": [next_year],
    "days_in_month": [31],
    "week_span": [July_week_span_next_year],
    "day_of_month_array": [July_day_of_month_array_next_year]
  },
  {
    "month": ["August"],
    "year": [next_year],
    "days_in_month": [31],
    "week_span": [August_week_span_next_year],
    "day_of_month_array": [August_day_of_month_array_next_year]
  },
  {
    "month": ["September"],
    "year": [next_year],
    "days_in_month": [30],
    "week_span": [September_week_span_next_year],
    "day_of_month_array": [September_day_of_month_array_next_year]
  },
  { 
    "month": ["October"],
    "year": [next_year],
    "days_in_month": [31],
    "week_span": [October_week_span_next_year],
    "day_of_month_array": [October_day_of_month_array_next_year]
  },
  {
    "month": ["November"],
    "year": [next_year],
    "days_in_month": [30],
    "week_span": [November_week_span_next_year],
    "day_of_month_array": [November_day_of_month_array_next_year]
  },
  {
    "month": ["December"],
    "year": [next_year],
    "days_in_month": [31],
    "week_span": [December_week_span_next_year],
    "day_of_month_array": [December_day_of_month_array_next_year]
  }
]