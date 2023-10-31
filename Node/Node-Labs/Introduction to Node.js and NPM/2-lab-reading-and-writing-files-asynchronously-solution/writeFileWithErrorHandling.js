const fs = require('fs');

// Function to write data to a file Asynchronously with Error Handling
function writeFileAsync(filename, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(filename, data, (err) => {
            if (err) {
                if (err.code === 'EACCES') {
                    reject(`Permission denied to write to ${filename}`);
                } else if (err.code === 'ENOSPC') {
                    reject(`No space left on the device to write to ${filename}`);
                } else {
                    reject(`Error writing to file ${filename}: ${err.message}`);
                }
            } else {
                resolve('Data written successfully');
            }
        });
    });
}

// Function to read a file Asynchronously
function readFileAsync(filename) {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, 'utf8', (err, data) => {
            if (err) {
                reject(`Error reading file ${filename}: ${err.message}`);
            } else {
                resolve(data);
            }
        });
    });
}

async function main() {
    const dataToWrite = 'This is some data to write to output.txt';

    try {
        await writeFileAsync('output.txt', dataToWrite);
        console.log('Data written successfully to output.txt');

        const content = await readFileAsync('output.txt');
        console.log('Contents of output.txt:');
        console.log(content);
    } catch (error) {
        console.error(error);
    }
}

main();