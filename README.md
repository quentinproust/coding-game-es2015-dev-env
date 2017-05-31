# Codingame dev env for javascript (es2015)

## Requirement :

- Node and npm installed
- If you want your successful build to be synchronised with the coding game ide, use the chrome extension `CodinGame Sync` as described in the [codingame FAQ](https://www.codingame.com/faq)

## Install :

- Clone the repository
- Run `npm install`
- Run `npm dev` to make sure everything works fine. It should run all tests and build `codingame-script.js` in `dist/`
- That's all ;)

## Where should I code ?

### Sources

The sources should be in `src` directory.
The entry point is `index.js`. The build will contains this file and all its imports recursively.

### Tests

The tests should be in `test` directory.

## Commands :

- dev : watch modification in src and test. Run all tests and build for every changes.
- build : Build all src files to dist/codingame-script.js
- test : Run test once
- tdd : watch for modification in src and test. Run all tests for every changes.

## Language :

The targeted language is javascript in es2015 version.

The script "codingame-script.js" is in es2015, it's supported by Codingame.

The tests are automatically transpiled in es5 (old javascript) with [babel](https://babeljs.io/learn-es2015/). They use [mocha](https://mochajs.org/) + [chai](http://chaijs.com/).