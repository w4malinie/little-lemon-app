import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import BookingPage from "./BookingPage";

function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/booking" element={<BookingPage />}></Route>
      </Routes>
    </main>
  );
}

export default Main;
