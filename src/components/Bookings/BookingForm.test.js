import { render, screen, fireEvent, getByText } from "@testing-library/react";
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

describe("BookingForm submit", () => {
  it("shoud call submitForm function", () => {
    const submitForm = jest.fn();
    const { getByTestId } = render(
      <BrowserRouter>
        <BookingForm submitForm={submitForm} />
      </BrowserRouter>
    );
    fireEvent.submit(getByTestId("form"));
    expect(submitForm).toHaveBeenCalled();
  });
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
    const { getByTestId } = render(
      <BrowserRouter>
        <BookingForm submitForm={() => {}} dispatch={dispachSpy} />
      </BrowserRouter>
    );

    const dateInput = screen.getByTestId("res-date");
    const submitButton = screen.getByText("Make reservation");
    const timeInput = screen.getByText("Make reservation");

    fireEvent.mouseDown(dateInput);
    fireEvent.change(dateInput, { target: { value: "2023-04-03" } });

    expect(timeInput).toBeEnabled();
    expect(submitButton).toBeEnabled();
    expect(dispachSpy).toHaveBeenCalled();
  });

  it("should prompt the user about missing guests field", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <BookingForm submitForm={() => true} dispatch={() => {}} />
      </BrowserRouter>
    );

    const dateInput = screen.getByTestId("res-date");

    fireEvent.mouseDown(dateInput);
    fireEvent.change(dateInput, { target: { value: "2023-04-03" } });

    const submitButton = screen.getByText("Make reservation");
    fireEvent.mouseDown(submitButton);

    const warning = screen.getByText(
      "A table can't be reserved for less than one person"
    );
    expect(warning).toBeInTheDocument();
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
