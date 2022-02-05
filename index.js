// JS Refresher

// Built in Identifiers
// console - to print things on terminal
// global - Global Namespace
// process - Access to currently running node process

// Events
// Callback functions - Calls function on exit
// Callback allows for async code execution, where other code can be run first before callback functions are called.

// Promises
// Can define functions as async and use await keyword to declare async function
// -------------------------------------------------------

const express = require('express');
const app = express();
const { readFile } = require('fs/promises');

app.get('/', async (req, res) => {
  res.send(await readFile('./home.html', 'utf-8'));
});

app.listen(process.env.PORT || 3000, () =>
  console.log('App available on http://localhost:3000')
);
