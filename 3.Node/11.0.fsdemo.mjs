//const fs = require('fs');

//fs is a default module in nodejs whose use case is to read and write files to the file system.

//fs module provides two types of functions. Either they provide a callback based function or a promise based function. 

//The callback based function is the one that we have been using so far.

//The promise based function is the one that we will be using in this example.

import { readFile } from 'fs/promises';

//creating a filepath

const filepath = new URL('./11.1.index.html', import.meta.url);

const data = await readFile(filepath, { encoding: 'utf-8' });

console.log(data);