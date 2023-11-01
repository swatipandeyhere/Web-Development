const fs = require('fs');
const util = require('util');

const readFileAsync = util.promisify(fs.readFile);

async function main() {
    try {
        const content1 = await readFileAsync('input1.txt', 'utf-8');
        const content2 = await readFileAsync('input2.txt', 'utf-8');

        console.log('Contents of input1.txt:');
        console.log(content1);

        console.log('Contents of input2.txt:');
        console.log(content2);
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
}

main();