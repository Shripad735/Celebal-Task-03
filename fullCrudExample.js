// fullCrudExample.js
const fs = require('fs/promises');
const path = require('path');

const filePath = path.join(__dirname, 'testfile.txt');

async function run() {
  try {
    // Write file
    await fs.writeFile(filePath, 'Hello from Async/Await!');
    console.log('File created.');

    // Read file
    const data = await fs.readFile(filePath, 'utf8');
    console.log('File content:', data);

    // Delete file
    await fs.unlink(filePath);
    console.log('File deleted.');
  } catch (err) {
    console.error('An error occurred:', err);
  }
}

run();

// Output:
// PS D:\Shripad SK\Celebal_SIP\async-refactor> node .\fullCrudExample.js
// File created.
// File content: Hello from Async/Await!
// File deleted.