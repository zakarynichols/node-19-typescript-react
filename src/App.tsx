import { commonJSmodule } from "./comjs.cjs";
import { ECMAScriptModule } from "./mod.mjs";
import { Nested } from "./components/Nested.js";

export function App() {
  return (
    <div>
      <Nested />
      <div>some text</div>
      <div>{commonJSmodule()}</div>
      <div>{ECMAScriptModule()}</div>
    </div>
  );
}
