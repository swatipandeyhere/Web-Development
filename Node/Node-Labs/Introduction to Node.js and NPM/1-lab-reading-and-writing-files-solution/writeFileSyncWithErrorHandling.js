const fs = require('fs');

// Write data to output.txt
const dataToWrite = 'This is some text to write to output.txt';

try {
    fs.writeFileSync('output.txt', dataToWrite);
    console.log('Data written to output.txt successfully.');
} catch (err) {
    if (err.code === 'EACCES') {
        console.error('Permission denied: Unable to write to output.txt');
    } else if (err.code === 'ENOSPC') {
        console.error('No space left on device: Unable to write to output.txt');
    } else {
        console.error('Error writing to output.txt:', err.message);
    }
}

// Verify by reading the written data
try {
    const writtenData = fs.readFileSync('output.txt', 'utf8');
    console.log('Contents of output.txt:');
    console.log(writtenData);
} catch (err) {
    console.error('Error reading output.txt:', err.message);
}