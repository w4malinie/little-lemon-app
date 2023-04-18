import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./booking.css";

const GuestsErrorMessage = () => {
  return (
    <p className="field-error">
      A table can't be reserved for less than one person
    </p>
  );
};

function BookingForm({
  time = "",
  setTime,
  availableTimes = [],
  dispatch,
  submitForm,
}) {
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState({
    value: "0",
    isTouched: false,
  });
  const [occasion, setOccasion] = useState("");

  const getIsFormValid = () => {
    return date && guests;
  };

  const navigate = useNavigate();

  const clearForm = () => {
    setDate("");
    setTime("");
    setGuests("0");
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
    if (date) {
      dispatch(date);
    }
  }, [date]);

  return (
    <form onSubmit={handleSubmit} data-testid="form" aria-label="Booking table">
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
        required
        aria-label="Choose a date"
        autoFocus
      />
      <label htmlFor="res-time">
        Select time<sup>*</sup>{" "}
      </label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => {
          setTime(e.target.value);
        }}
        required
        disabled={!date}
        aria-label="Select time"
      >
        {availableTimes.map((value) => (
          <option value={value} key={value}>
            {value}
          </option>
        ))}
      </select>

      <label htmlFor="guests">
        Number of guests<sup>*</sup>
      </label>
      <input
        type="number"
        placeholder={0}
        min={1}
        max={10}
        id="guests"
        value={guests.value}
        onChange={(e) => {
          setGuests({ value: e.target.value, isTouched: true });
        }}
        required
        minlength="1"
        aria-label="Number of guests"
      />
      {guests.isTouched && Number(guests.value) < 1 ? (
        <GuestsErrorMessage />
      ) : null}

      <label htmlFor="occasion">Select occasion</label>
      <select
        id="occasion"
        name="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
        aria-label="Occasion"
      >
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <button type="submit" disabled={!getIsFormValid()}>
        Make reservation
      </button>
    </form>
  );
}

export default BookingForm;
