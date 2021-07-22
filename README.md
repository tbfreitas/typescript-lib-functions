# Lib with utils javascript functions to learn

### How to test

1. Get into the utils-javascript.
2. Create the functions you desire to export.
3. Run the command `npm run build`.
4. A new folder called lib will be created on the folder.
5. Realize that you export is in ecma6 pattern. If you wanna change, do it on `tsconfig.json`.
6. Run the command `npm link`.

You just have created a syslink to the lib, which was storaged on your personal OS folder.

1. Get into the test-project.
2. Run the command `npm link utils-javascript`.
3. Call the expression you wanna to use (there a sample on index.js).
4. Run the code with `node src/index/`. (or call `npm run build` to generate a minimified javascript, and using ecma6 support.)
