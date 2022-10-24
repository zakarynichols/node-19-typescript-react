# Node v19.0.0 React, TypeScript, and Jest w/Live Reload

A minimal boilerplate example demonstrating React with ECMAScript modules with TypeScript and Jest.

Take note of `"type": "module"` in the `package.json`. Jest will be able to interpret compiled ESNext code so long as the `--experimental-vm-modules` flag is used.

A caveat is `moduleResolution` must be set to `node` to satisfy Webpacks ts-loader. Other tools like Jest use a regular expression to match the extensions. Webpack doesn't have such a feature.

# Development

Bundle the source code into `public/dist` and use a vscode tool like live-server or spin up your own server and emit the files.

`npm run bundle`

# Jest

For now, tests are compiled to JS in `./tests` and then ran against the test-runner. Needs a bit more configuration.

```
npm run test
```
