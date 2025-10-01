const http = require('http');  

const server = http.createServer((req, res) => {
    // console.log(req);
    // res.write('Hello World');
    // res.end();
    if(req.url === '/'){
        res.end('Hello Home Page');

    }
    else if(req.url === '/about'){
        res.end('About');
    }
    else {
        res.end(`<h1>Oops wrong page bud</h1>
            <p>The page you are looking for does not exist</p>
            <a href="/">Go back to home page</a>`)
    }
       
});

server.listen(3000, ()=> {
    console.log("Server running on http://localhost:3000")
});