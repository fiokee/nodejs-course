const fs = require('fs');

//creating a route 

const handleRequest = ((req, res)=>{
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
        //storing the user input in a text file
       const body = [];
       req.on('data', (chunk)=>{
        console.log(chunk)
        body.push(chunk)
       });
       //parseing request
       return req.on('end', ()=>{
        const parseBody = Buffer.concat(body).toString();
        console.log(parseBody);
        //blocking and non blocking request
        const message = parseBody.split('=')[1];
        fs.writeFile('message.txt', message, err=>{
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
        });
       });
    
    }
    
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title> My first Nodejs Page </title></head>');
    res.write('<body><h1>Hello Nodejs</h1></body>');
    res.write('</html>');
    res.end()
})
module.exports = handleRequest
