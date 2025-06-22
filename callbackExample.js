// callbackExample.js
const fs = require('fs');

fs.readFile('sample.txt', 'utf8', function (err, data) {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('File content:', data);
});

// Output:
// PS D:\Shripad SK\Celebal_SIP\async-refactor> node callbackExample.js
// File content: ��Hello from sample.txt!