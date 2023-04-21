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
  });
  const [occasion, setOccasion] = useState("");
  const [wasSubmitted, setWasSubmitted] = useState(false);

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

    setWasSubmitted(true);

    if (!guests.value || Number(guests.value) === 0) {
      return;
    }

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
    <form
      onSubmit={handleSubmit}
      data-testid="form"
      aria-label="Booking  atable"
    >
      <label htmlFor="res-date">
        Choose date<sup>*</sup>{" "}
      </label>
      <input
        type="date"
        id="res-date"
        data-testid="res-date"
        value={date}
        onChange={(e) => {
          setDate(e.target.value);
          dispatch(e.target.value);
        }}
        aria-label="Choose a date"
        autoFocus
        aria-required="true"
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
        disabled={!date}
        aria-label="Select time"
        aria-required="true"
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
        id="guests"
        value={guests.value}
        data-testid="guests-input"
        onChange={(e) => {
          setGuests({ value: e.target.value });
        }}
        aria-label="Number of guests"
        aria-required="true"
      />

      {wasSubmitted && Number(guests.value) < 1 ? <GuestsErrorMessage /> : null}

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
