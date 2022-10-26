import { commonJSmodule } from "./comjs.cjs";

export function ECMAScriptModule() {
  return "I have a .mts extension.";
}

console.log(commonJSmodule());
