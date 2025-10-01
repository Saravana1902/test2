const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
// const mysql = require('mysql');
// const sqlite3 = require('sqlite3').verbose();
//const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const fs = require('fs');
// const path = require('path');
// const crypto = require('crypto');
// const nodemailer = require('nodemailer');
// const axios = require('axios');
// const cheerio = require('cheerio');
// const { exec } = require('child_process');      



//const { sayHello } = require('../module');
const sayfunc = require('../module');
//require('../module');
const variables = require('../variable');

const vary = 1;



app.listen(port, () => {
    // sayHello('mj',11);  
    sayfunc.sayHello('alice', 25,variables.salary2);
    
    // sayHello(variables.pet,variables.age);
    // sayHello(variables.salary1,variables.salary2,variables.salary3);
    //sayfunc.sayHello(variables.pet,variables.age);
    //sayfunc.sayHOHOHO(variables.salary2);

    
    // console.log(process.env.USERNAME);
    // console.log(process.env.PASSWORD);
    // console.log(process.env.DATABASE);
    // console.log(process.env.HOST);
    // console.log(process.env.PORT);
    // console.log(process.env.DATABASENAME);
    // console.log(process.env.DATABASEUSER);
    // console.log(process.env.DATABASEPASSWORD);
    // console.log(`Server is running on port ${port}`);
    //console.log(`__filename: ${__filename}`);

    // setInterval(() => {
    //     console.log(`Server running...`);
    // }, 1000);

    // setTimeout(() => {
    //     console.log(`Server running...`);
    // }, 1000);

    // Timeout cancel
    // const t = setTimeout(() => console.log("Hello"), 3000);
    // clearTimeout(t);

    // // Interval cancel
    // const i = setInterval(() => console.log("Tick"), 1000);
    // setTimeout(() => clearInterval(i), 5000); // stops after 5s

    //const pet = 'peter'

    // const sayHello = (pet) => {
    //     console.log(`Hello ${pet}`);
    // }
    
    
    //console.log(variables);
    // sayHello(`John`);
    // sayHello(`Jane`);


});


module.export = { vary };




