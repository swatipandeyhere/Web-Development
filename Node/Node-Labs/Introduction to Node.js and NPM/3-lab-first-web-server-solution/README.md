# Lab Title:
Creating our First Web Server in Node.js with Error Handling

# Objective:
The objective of this lab is to learn how to set up a basic Web Server using Node.js, including Error Handling.

# Instructions:
1. Setting Up:
   1. Clone this repository.
   2. Move inside the lab-first-web-server directory.

2. Creating our First Web Server:
   1. Create a JavaScript file (e.g., server.js).
   2. Implement Error Handling for the following scenarios:
      1. Handle a "404 Not Found" error for any URL other than the root (http://127.0.0.1:3000/).
      2. Handle a "500 Internal Server Error" in the event of a server error, such as an unhandled exception.
      3. Include appropriate error messages in the response for each error scenario.

3. Running the Web Server:
   1. Run the server using the "node server.js" command.
   2. We should see the message "Server running at http://127.0.0.1:3000/" in the console, indicating that the server is running.
   3. Open a web browser and enter http://127.0.0.1:3000/ in the address bar to make a request to the server.
   4. We will receive the response "Hello, I am Node.js Web Server!" in our browser.