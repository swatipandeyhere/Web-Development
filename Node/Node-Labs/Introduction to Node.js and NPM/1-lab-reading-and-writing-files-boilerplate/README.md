# Lab Title:
Synchronous File I/O in Node.js with Error Handling

# Objective:
The objective of this lab is to introduce the concept of Synchronous File Operations in Node.js, including Error Handling. We will learn how to perform basic file reading and writing synchronously and how to handle errors effectively.

# Instructions:
1. Setting Up:
   1. Clone this repository.
   2. Move inside the lab-reading-and-writing-files directory.
   3. There are three files already present inside the directory.
      1. input1.txt and input2.txt contain some text.
      2. output.txt is an empty file.

2. Reading Files Synchronously with Error Handling:
   1. Create a JavaScript file (e.g., readFileSyncWithErrorHandling.js) to read the contents of input1.txt and input2.txt synchronously using the fs module.
   2. Implement Error Handling for the file reading operation, including handling situations like file not found.
   3. Once the file is read, log the content to the console.
   4. Log meaningful error messages in case of errors.

3. Writing Files Synchronously with Error Handling:
   1. Create another JavaScript file (e.g., writeFileSyncWithErrorHandling.js) to write some text data to output.txt synchronously using the fs module.
   2. Implement Error Handling for the file writing operation, including handling permissions issues and disk full errors.
   3. Verify that the data has been written successfully by reading the output.txt file synchronously and logging its content to the console.
   4. Log meaningful error messages in case of errors.

# Hints:
Explore the different Error Codes, such as 'ENOENT' (File not found), 'EACCES' (Permission Denied), and 'ENOSPC' (No Space Left).