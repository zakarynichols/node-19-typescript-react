export function commonJSmodule() {
  return "I have a .cts extension.";
}

/**
 * CommonJS is sync and does not have top-level `await`
 * Wrap in an `async` IIFE or use regular async function and invoke it.
 */
(async function () {
  const { ECMAScriptModule } = await import("./mod.mjs");
  console.log(ECMAScriptModule());
})();
