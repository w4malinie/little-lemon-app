import React from "react";
import { useState, useRef } from "react";
import styles from "./booking.css";

function BookingForm() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("birthday");

  const getIsFormValid = () => {
    return date && time && guests;
  };

  const clearForm = () => {
    setDate("");
    setTime("");
    setGuests("");
    setOccasion("birthday");
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
        <option value="17">17:00</option>
        <option value="18">18:00</option>
        <option value="19">19:00</option>
        <option value="20">20:00</option>
        <option value="21">21:00</option>
        <option value="22">22:00</option>
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
