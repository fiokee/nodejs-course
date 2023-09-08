const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res)=>{
    // console.log(req.url, req.headers, req.method)

    //creating a route 
    const url = req.url;
    const method = req.method;

    if(url === '/'){
        res.write('<htmL>')
        res.write('<head><title>Enter message</title></head>')
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Submit</button></form>');
        res.write('</body></html>');
        return res.end()
    }

    if(url ==='/message' && method === 'POST'){
    fs.writeFileSync('message.txt', 'Hello User of Node App');
    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title> My first Nodejs Page </title></head>');
    res.write('<body><h1>Hello Nodejs</h1></body>');
    res.write('</html>');
    res.end()
});

server.listen(3000, ()=>{
    console.log('Server is running on port 3000');
})


