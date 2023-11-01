const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((request, response) => {
    const name = 'ProGradian';

    const labs = ["1-lab-reading-and-writing-files",
        "2-lab-reading-and-writing-files-asynchronously",
        "3-lab-first-web-server",
        "4-lab-routing",
        "5-lab-building-first-api"
    ]

    if (request.method === 'GET' && request.url === '/') {
        // Write your code here
    }
    else {
        response.writeHead(404, { 'Content-Type': 'text/html' });
        response.end('<h1><center>404 Not Found</center></h1>');
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});