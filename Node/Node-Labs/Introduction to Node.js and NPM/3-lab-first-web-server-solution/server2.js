const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

// Create an HTTP Server
const server = http.createServer((request, response) => {
    try {
        if (request.method === 'GET' && request.url === '/') {
            // response.statusCode = 200;
            // response.setHeader('Content-Type', 'text/plain');
            response.writeHead(200, { 'Content-Type': 'text/plain' });

            // Send a Response to the Client
            response.end('Hello, I am Node.js Web Server!');
        }
        else {
            response.writeHead(404, { 'Content-Type': 'text/plain' });
            response.end('404 Not Found');
        }
    }
    catch (error) {
        response.writeHead(500, { 'Content-Type': 'text/plain' });
        response.end('500 Internal Server Error');
        console.error('Server Error:', error);
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});