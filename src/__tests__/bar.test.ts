import { bar } from "../bar";
import { appendToBody, logger } from "../console";
import { jest } from "@jest/globals";

const logSpy = jest.spyOn(console, "log");

it("does not kill jest when using a module", () => {
  expect(bar()).toBe("bar bar bar");
});

it("logs text to the console", () => {
  const text = "something was logged";
  logger(text);
  expect(logSpy).toBeCalledWith(text);
});

it("doesn't break with a DOM", () => {
  const text = "goodbye world";
  const divEl = document.createElement("div");
  divEl.textContent = text;
  appendToBody(divEl);
  expect(document.body.firstChild).toBeInstanceOf(HTMLDivElement);
  expect(document.body.firstChild?.textContent).toBe(text);
});
