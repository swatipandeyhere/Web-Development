const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((request, response) => {
    if (request.url === '/' && request.method === 'GET') {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end('<h1><center>Hello, I am Node.js Web Server!</center></h1>');
    }
    else if (request.url === '/user/all' && request.method === 'GET') {
        const userData = fs.readFileSync(`${__dirname}/userApi.json`);
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify(JSON.parse(userData)));
    }
    else if (/\/user\/[0-9]+/.test(request.url) && request.method === 'GET') {
        const userData = fs.readFileSync(`${__dirname}/userApi.json`);
        const path = request.url.split('/');
        const userId = Number(path[path.length - 1]);
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify(JSON.parse(userData).find((user) => user.id === userId)));
    }
    else {
        response.writeHead(404, { 'Content-Type': 'text/html' });
        response.end('<h1><center>404 Not Found</center></h1>');
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});