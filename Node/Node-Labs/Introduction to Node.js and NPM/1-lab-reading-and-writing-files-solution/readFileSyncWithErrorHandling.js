const fs = require('fs');

// Read input1.txt
try {
    const data1 = fs.readFileSync('input1.txt', 'utf8');
    console.log('Contents of input1.txt:');
    console.log(data1);
} catch (err) {
    if (err.code === 'ENOENT') {
        console.error('File not found: input1.txt');
    } else {
        console.error('Error reading input1.txt:', err.message);
    }
}

// Read input2.txt
try {
    const data2 = fs.readFileSync('input2.txt', 'utf8');
    console.log('Contents of input2.txt:');
    console.log(data2);
} catch (err) {
    if (err.code === 'ENOENT') {
        console.error('File not found: input2.txt');
    } else {
        console.error('Error reading input2.txt:', err.message);
    }
}