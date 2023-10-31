const fs = require('fs');

// Function to read a file Asynchronously with Error Handling
function readFileAsync(filename) {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, 'utf8', (err, data) => {
            if (err) {
                if (err.code === 'ENOENT') {
                    reject(`File not found: ${filename}`);
                } else {
                    reject(`Error reading file ${filename}: ${err.message}`);
                }
            } else {
                resolve(data);
            }
        });
    });
}

async function main() {
    try {
        const content1 = await readFileAsync('input1.txt');
        const content2 = await readFileAsync('input2.txt');

        console.log('Contents of input1.txt:');
        console.log(content1);

        console.log('Contents of input2.txt:');
        console.log(content2);
    } catch (error) {
        console.error(error);
    }
}

main();