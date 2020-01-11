var http = require('http');

const server = http.createServer(function (req,res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World');
})
    server.listen(8080) 
    console.log('Server is listening on localhost:8080')
