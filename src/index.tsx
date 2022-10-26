import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { App } from "./App.js";
import { errorEventListener } from "error-event-listener";

errorEventListener({
  type: "error",
  onError: (ev) => {
    console.error(ev);
  },
  ui: () => {
    const el = document.createElement("div");
    el.textContent = "dynamic stuff";
    return el;
  },
});

throw new Error("oops");

const container = document.createElement("div");

document.body.appendChild(container);

const root = createRoot(container);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
