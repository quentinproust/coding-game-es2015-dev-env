# Codingame dev env for javascript (es2015)

## Requirement :

- Node and npm installed
- If you want your successful build to be synchronised with the coding game ide, use the chrome extension `CodinGame Sync` as described in the [codingame FAQ](https://www.codingame.com/faq)

## Install :

- Clone the repository or just download the files in a directory
- Run `npm install`
- Run `npm dev` to make sure everything works fine. It should run all tests and build `codingame-script.js` in `dist/`
- That's all ;)

## Commands :

The following commands are defined in package.json. They can be run with `npm run <command name>`:
- *dev* : watch modification in src and test. Run all tests and build for every changes.
- *build* : Build all src files to dist/codingame-script.js
- *test* : Run test once
- *tdd* : watch for modification in src and test. Run all tests for every changes.

## Language :

The targeted language is javascript in es2015 version.

The script "codingame-script.js" is in es2015, it's supported by Codingame.

The tests are automatically transpiled in es5 (old javascript) with [babel](https://babeljs.io/learn-es2015/). They run with [mocha](https://mochajs.org/) + [chai](http://chaijs.com/).

## Where should I code ?

### Sources

The sources should be in `src` directory.
The entry point is `index.js`. The build will contains this file and all its imports recursively.

### Tests

The tests should be in `test` directory.

## Differences from Codingame

To be able to test, you will need to use a different api from the one provided by Codingame. 
The new api is defined in src/Codingame.js. You can import it in any javascript file where you need it.

Here the differences :

- *Logging* : in Codingame, you use the `printErr(msg)` function. Here, you will use `log(msg)`. It maps to `printErr(msg)` in the Codingame ide and to `console.log(msg)` in tests.
- *Input* : in Codingame, you use the `readline()` function. Here, you will use `io.readline()`. It maps to `readline()` in Codingame ide and to a list of lines in tests. To add new lines in your tests, use `io.addInputLine(line)`.
- *Output* : in Codingame, you use the `print(command)` function to give new command. Here, you will use `io.print(line)`. It maps to `print(line)` in Codingame ide and to a list of commands in tests. To read the commands in your tests, use `io.getNextPrintCommand()`.

As you can see, it's pretty straightforward. Below an example : 

```javascript
// In a test, the path is '../src/Codingame'
import { io, log } from './Codingame';

// Only in test : add a new input line
io.addInputLine('0 10 9 019 0');

// To read a line
const line = io.readline();
// >> line = '0 10 9 019 0'

// Print a MOVE command
io.print('MOVE 10 10');

// Only in test : get the command previously printed
const command = io.getNextPrintCommand();
// command = 'MOVE 10 10'

// log some message
log('hello world');
```
