const http = require('http');

const server = http.createServer((req, res)=>{
    console.log(req.url, req.headers, req.method)

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title> My first Nodejs Page </title></head>');
    res.write('<body><h1>Hello Nodejs</h1></body>');
    res.write('</html>');
    res.end()
});

server.listen(3000)


