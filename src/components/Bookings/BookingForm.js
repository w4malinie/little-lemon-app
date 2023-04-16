import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./booking.css";

function BookingForm({
  time,
  setTime,
  availableTimes = [],
  dispatch,
  submitForm,
}) {
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");

  const getIsFormValid = () => {
    console.log(date, time, guests);
    return date && time && guests;
  };
  const navigate = useNavigate();

  const clearForm = () => {
    setDate("");
    setTime("");
    setGuests("");
    setOccasion("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = submitForm({ date, time, guests, occasion });
    if (result) {
      clearForm();
      navigate("/confirmation");
    }
  };

  useEffect(() => {
    dispatch(date);
  }, [date]);

  return (
    <form onSubmit={handleSubmit} data-testid="form">
      <label htmlFor="res-date">
        Choose date<sup>*</sup>{" "}
      </label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={(e) => {
          setDate(e.target.value);
          dispatch(e.target.value);
        }}
      />
      <label htmlFor="res-time">
        Choose time<sup>*</sup>{" "}
      </label>
      <select
        id="res-time "
        value={time}
        onChange={(e) => {
          setTime(e.target.value);
        }}
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
