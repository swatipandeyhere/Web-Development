# Lab Title:
Implement Node.js Routing without using Express.js

# Objective:
The objective of this lab is to learn how to use the concept of Routing in Node.js

# Instructions:
1. Setting Up:
   1. Clone this repository.
   2. Move inside the lab-routing directory.

2. Creating and Running our First Web Server:
   1. Refer to the lab-first-web-server directory.

3. Create the following Routes:
   1. If the request method is 'GET' and the URL is '/', it responds with a "Hello, I am the Landing Page of Node.js Web Server!" message in HTML format.
   2. If the request method is 'GET' and the URL is '/about', it responds with a "Hello, I am the About Page of Node.js Web Server!" message in HTML format.
   3. If the request method is 'GET' and the URL is '/contact', it responds with a "Hello, I am the Contact Page of Node.js Web Server!" message in HTML format.
   4. If none of the above conditions match (i.e, the URL is not '/', '/about', or '/contact'), it responds with a "404 Not Found" message in HTML format with a 404 status code.
   5. The server also has an error handler attached using the server.on('error', ...) method. If an error occurs, it responds with a "500 Internal Server Error" message in HTML format with a 500 status code and logs the error to the console.