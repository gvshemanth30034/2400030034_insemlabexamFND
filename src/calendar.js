import React, { useState } from "react";
import "./App.css";

const events = [
  { date: "2025-10-10", title: "Team Meeting", description: "Monthly project sync." },
  { date: "2025-10-15", title: "Demo Day", description: "Product showcase for stakeholders." },
  { date: "2025-10-20", title: "Hackathon", description: "24-hour coding challenge!" },
];

function Calendar() {
  const [selectedDate, setSelectedDate] = useState(null);

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const handleDateClick = (day) => {
    const formattedDate = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    setSelectedDate(formattedDate);
  };

  const eventsForDate = events.filter((event) => event.date === selectedDate);

  return (
    <div className="calendar">
      <h2>📅 {today.toLocaleString("default", { month: "long" })} {year}</h2>
      <div className="calendar-grid">
        {[...Array(daysInMonth)].map((_, i) => {
          const day = i + 1;
          const formattedDate = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
          const isSelected = selectedDate === formattedDate;

          return (
            <div
              key={day}
              className={`calendar-day ${isSelected ? "selected" : ""}`}
              onClick={() => handleDateClick(day)}
            >
              {day}
            </div>
          );
        })}
      </div>

      {selectedDate && (
        <div className="event-details">
          <h3>Events on {selectedDate}</h3>
          {eventsForDate.length > 0 ? (
            eventsForDate.map((event, i) => (
              <div key={i}>
                <strong>{event.title}</strong>
                <p>{event.description}</p>
              </div>
            ))
          ) : (
            <p>No events for this date.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Calendar;
