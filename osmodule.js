const os = require('os');
const express = require('express');
const app = express();
const port = 3000;

const user = os.userInfo();

// app.listen(port, () => {
//     console.log(`username: ${user.username}, listening at http://localhost:${port}...`);
// });

// console.log(user);
//console.log(os.uptime());

const currentos = {
    name : os.type(),
    arch : os.arch(),
    release : os.release(),
    uptime : os.uptime(),
    totalmem : os.totalmem(),
    freemem : os.freemem(),
}
console.log(currentos);