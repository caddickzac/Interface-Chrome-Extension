
// Dynamically generate a full year calendar
const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function generateCalendar(year = new Date().getFullYear()) {
  const calendarContainer = document.getElementById("calendar");
  if (!calendarContainer) return;

  calendarContainer.innerHTML = "";

  monthNames.forEach((month, monthIndex) => {
    const monthDiv = document.createElement("div");
    monthDiv.className = "month";

    const title = document.createElement("h3");
    title.textContent = `${month} ${year}`;
    monthDiv.appendChild(title);

    const table = document.createElement("table");
    table.className = "calendar-table";

    const thead = document.createElement("thead");
    const headRow = document.createElement("tr");
    dayNames.forEach(day => {
      const th = document.createElement("th");
      th.textContent = day;
      headRow.appendChild(th);
    });
    thead.appendChild(headRow);
    table.appendChild(thead);

    const firstDay = new Date(year, monthIndex, 1).getDay();
    const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();

    const tbody = document.createElement("tbody");
    let row = document.createElement("tr");

    for (let i = 0; i < firstDay; i++) {
      row.appendChild(document.createElement("td"));
    }

    for (let date = 1; date <= daysInMonth; date++) {
      const cell = document.createElement("td");
      cell.textContent = date;

      if ((firstDay + date - 1) % 7 === 0 && date !== 1) {
        tbody.appendChild(row);
        row = document.createElement("tr");
      }

      row.appendChild(cell);
    }

    tbody.appendChild(row);
    table.appendChild(tbody);
    monthDiv.appendChild(table);
    calendarContainer.appendChild(monthDiv);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  generateCalendar();
});
