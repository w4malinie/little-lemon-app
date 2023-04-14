import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";
import { initializeTimes } from "./Main";
import { updateTimes } from "./Main";

test("Renders the BookingForm heading", () => {
  render(<BookingForm />);
  const labelElement = screen.getByText("Choose date");
  expect(labelElement).toBeInTheDocument();
});

test("Form can be submitted by the user", () => {
  const onSubmit = jest.fn();
  const { getByTestId } = render(<Form onSubmit={onSubmit} />);
  fireEvent.submit(getByTestId("form"));
  expect(onSubmit).toHaveBeenCalled();
});

test("Validates that function returns the correct expected value.", () => {
  const result = initializeTimes();
  expect(result.length).toBe(6);
  expect(result[0]).toBe("17:00");
  expect(result[1]).toBe("18:00");
});

test("Validate that function returns the same value that is provided in the state", () => {
  const result = updateTimes();
  expect(result.length).toBe(2);
  expect(result[0]).toBe("06:00");
});
