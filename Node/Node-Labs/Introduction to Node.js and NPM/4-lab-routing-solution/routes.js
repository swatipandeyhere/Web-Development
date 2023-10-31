const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((request, response) => {
    if (request.method === 'GET' && request.url === '/') {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end('<h1><center>Hello, I am the Landing Page of Node.js Web Server!</center></h1>');
    }
    else if (request.method === 'GET' && request.url === '/about') {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end('<h1><center>Hello, I am the About Page of Node.js Web Server!</center></h1>');
    }
    else if (request.method === 'GET' && request.url === '/contact') {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end('<h1><center>Hello, I am the Contact Page of Node.js Web Server!</center></h1>');
    }
    else {
        response.writeHead(404, { 'Content-Type': 'text/html' });
        response.end('<h1><center>404 Not Found</center></h1>');
    }
});

server.on('error', (error) => {
    response.writeHead(500, { 'Content-Type': 'text/html' });
    response.end('<h1><center>500 Internal Server Error</center></h1>');
    console.error('Server Error:', error);
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});