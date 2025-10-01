const path = require('path');
const fs = require('fs');
const express = require('express');
const app = express();

const server2 = require('./server2');

app.use(express.json());
console.log(server2);

//console.log(path.sep);

// const filepath = path.join('/content/','/subfolder','text.txt');

// console.log(filepath);