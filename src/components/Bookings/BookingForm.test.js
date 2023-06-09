import {
  render,
  screen,
  fireEvent,
  getByText,
  waitFor,
} from "@testing-library/react";
import BookingForm from "./BookingForm";
import { initializeTimes } from "./utils/times";
import { updateTimes } from "./utils/times";
import { BrowserRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";

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

describe("BookingForm submit", () => {
  it("should be disabled on entry", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <BookingForm submitForm={() => {}} />
      </BrowserRouter>
    );
    const submitButton = screen.getByText("Make reservation");
    const timeInput = screen.getByText("Make reservation");

    expect(submitButton).toBeDisabled();
    expect(timeInput).toBeDisabled();
  });
  it("should be enabled after filling the form fields", () => {
    const dispachSpy = jest.fn();
    const submitForm = jest.fn();
    const { getByTestId } = render(
      <BrowserRouter>
        <BookingForm submitForm={submitForm} dispatch={dispachSpy} />
      </BrowserRouter>
    );

    const dateInput = screen.getByTestId("res-date");
    const guestsInput = screen.getByTestId("guests-input");
    const submitButton = screen.getByText("Make reservation");
    const timeInput = screen.getByText("Make reservation");

    fireEvent.mouseDown(dateInput);
    fireEvent.change(dateInput, { target: { value: "2023-04-03" } });

    fireEvent.mouseDown(guestsInput);
    fireEvent.change(guestsInput, { target: { value: "2" } });

    expect(timeInput).toBeEnabled();
    expect(submitButton).toBeEnabled();

    fireEvent.submit(getByTestId("form"));

    expect(dispachSpy).toHaveBeenCalled();
    expect(submitForm).toHaveBeenCalled();
  });

  it("should prompt the user about missing guests field", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <BookingForm submitForm={() => false} dispatch={() => {}} />
      </BrowserRouter>
    );

    const warningText = "A table can't be reserved for less than one person";
    const dateInput = getByTestId("res-date");

    fireEvent.mouseDown(dateInput);
    fireEvent.change(dateInput, { target: { value: "2023-04-03" } });

    act(() => {
      getByTestId("form").submit();
    });

    expect(screen.getByText(warningText)).toBeInTheDocument();
  });
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
