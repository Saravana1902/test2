const {readFile, writeFile} = require('fs');

readFile('./content/first.txt', 'utf-8', (err, data) => {
    if(err){
        console.log(err);
        return;
    }
    const first = data;
    readFile('./content/second.txt', 'utf-8', (err, data) => {
    //console.log(data);
    if(err){
        console.log(err);
        return;
    }
    const second = data;
    writeFile('./content/result-async.txt', `here is the result of first and second file : ${first},${second}`, (err) => {
        if(err){
            console.log(err);
            return;
        }
    });
});
});