// promiseExample.js
const fs = require('fs/promises');

fs.readFile('sample.txt', 'utf8')
  .then(data => {
    console.log('File content:', data);
  })
  .catch(err => {
    console.error('Error reading file:', err);
  });

// // Output:
// PS D:\Shripad SK\Celebal_SIP\async-refactor> node promiseExample.js
// File content: ��Hello from sample.txt!