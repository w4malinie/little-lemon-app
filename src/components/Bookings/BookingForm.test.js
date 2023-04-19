import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";
import { initializeTimes } from "../utils/times";
import { updateTimes } from "../utils/times";
import { BrowserRouter } from "react-router-dom";

let windowSpy;

beforeEach(() => {
  windowSpy = jest.spyOn(window, "window", "get");
});

afterEach(() => {
  windowSpy.mockRestore();
});

test("Renders the BookingForm heading", () => {
  render(
    <BrowserRouter>
      <BookingForm
        setTime={() => {}}
        time={""}
        dispatch={() => {}}
        submitForm={() => {}}
      />
    </BrowserRouter>
  );
  const labelElement = screen.getByText("Choose date");
  expect(labelElement).toBeInTheDocument();
});

xtest("Form can be submitted by the user", () => {
  const submitForm = jest.fn();
  const { getByTestId } = render(
    <BrowserRouter>
      <BookingForm submitForm={submitForm} />
    </BrowserRouter>
  );
  fireEvent.submit(getByTestId("form"));
  expect(submitForm).toHaveBeenCalled();
});

test("Validates that function returns array of available hours", () => {
  windowSpy.mockImplementation(() => {
    return {
      fetchAPI() {
        return ["20:20", "20:30", "23:01"];
      },
    };
  });

  const result = initializeTimes();
  expect(result.length).toBe(3);
});

describe("updateTimes", () => {
  const expectedDates = ["17:00", "17:30", "18:00"];

  describe("when there is paylod", () => {
    it("should return date from payload", () => {
      windowSpy.mockImplementation(() => {
        return {
          fetchAPI() {
            return expectedDates;
          },
        };
      });

      const result = updateTimes(undefined, "2023-04-16");
      expect(result).toBe(expectedDates);
    });
  });

  describe("when there is no payload", () => {
    it("should return current date", () => {
      windowSpy.mockImplementation(() => {
        return {
          fetchAPI() {
            return expectedDates;
          },
        };
      });

      const result = updateTimes();
      expect(result).toBe(expectedDates);
    });
  });
});
