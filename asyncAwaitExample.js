// asyncAwaitExample.js
const fs = require('fs/promises');

async function readFile() {
  try {
    const data = await fs.readFile('sample.txt', 'utf8');
    console.log('File content:', data);
  } catch (err) {
    console.error('Error reading file:', err);
  }
}

readFile();

// Output:
// PS D:\Shripad SK\Celebal_SIP\async-refactor> node asyncAwaitExample.js
// File content: ��Hello from sample.txt!