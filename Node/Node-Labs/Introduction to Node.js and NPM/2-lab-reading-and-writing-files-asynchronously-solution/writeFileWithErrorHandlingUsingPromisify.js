const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);
const readFileAsync = util.promisify(fs.readFile);

async function main() {
    const dataToWrite = 'This is some data to write to output.txt';

    try {
        await writeFileAsync('output.txt', dataToWrite);
        console.log('Data written successfully to output.txt');

        const content = await readFileAsync('output.txt', 'utf8');
        console.log('Contents of output.txt:');
        console.log(content);
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
}

main();