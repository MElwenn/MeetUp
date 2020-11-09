import React from "react";
import { shallow } from "enzyme";
import NumberOfEvents from "../NumberOfEvents";

describe("<NumberOfEvents /> component", () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  });

  test("render textbox element", () => {
    expect(NumberOfEventsWrapper.find(".NumberOfEvents")).toHaveLength(1);
  });

  test("render text input correctly", () => {
    const NumberOfEvents = NumberOfEventsWrapper.state("NumberOfEvents");
    expect(
      NumberOfEventsWrapper.find("#NumberOfEvents_input").prop("value")
    ).toBe(NumberOfEvents);
  });

  test("change state when input changes", () => {
    const eventObject = { target: { value: 32 } };
    NumberOfEventsWrapper.find("#NumberOfEvents_input").simulate(
      "change",
      eventObject
    );
    expect(NumberOfEventsWrapper.state("NumberOfEvents")).toBe(32);
  });

  test("show number of events input label", () => {
    expect(NumberOfEventsWrapper.find(".NumberOfEvents label")).toHaveLength(1);
  });
});