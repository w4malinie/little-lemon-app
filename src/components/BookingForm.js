import React from "react";
import { useState, useEffect } from "react";
import styles from "./booking.css";

const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

function BookingForm() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState(availableTimes);
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");

  const getIsFormValid = () => {
    return date && time && guests;
  };

  const clearForm = () => {
    setDate("");
    setTime(availableTimes[0]);
    setGuests("");
    setOccasion("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Table reserved!");
    clearForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="res-date">
        Choose date<sup>*</sup>{" "}
      </label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={(e) => {
          setDate(e.target.value);
        }}
      />
      <label htmlFor="res-time">
        Choose time<sup>*</sup>{" "}
      </label>
      <select
        id="res-time "
        value={time}
        onChange={(e) => setTime(e.target.value)}
      >
        {availableTimes.map((value) => (
          <option value={value} key={value}>
            {value}
          </option>
        ))}
      </select>

      <label htmlFor="guests">
        Number of guests<sup>*</sup>{" "}
      </label>
      <input
        type="number"
        placeholder={1}
        min={1}
        max={10}
        id="guests"
        value={guests}
        onChange={(e) => {
          setGuests(e.target.value);
        }}
      />

      <label htmlFor="occasion">Select occasion</label>
      <select
        id="occasion"
        name="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <button type="submit" disabled={!getIsFormValid()}>
        Book a table
      </button>
    </form>
  );
}

export default BookingForm;
