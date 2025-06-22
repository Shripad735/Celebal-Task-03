# Asynchronous JavaScript Examples: Callbacks, Promises, and Async/Await

This repository demonstrates different ways to handle asynchronous operations in Node.js using the `fs` (file system) module. It provides examples for callbacks, promises, and the modern `async/await` syntax.

## Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.

## Getting Started

1.  Create a `sample.txt` file in the root of the project with some content. For example:
    ```
    Hello from sample.txt!
    ```

## Examples

This repository contains the following examples:

### 1. Callbacks (`callbackExample.js`)

This example uses the traditional callback pattern to read a file asynchronously. The callback function is executed once the file reading is complete.

**To run:**
```bash
node callbackExample.js
```

### 2. Promises (`promiseExample.js`)

This example uses Promises, which provide a cleaner way to handle asynchronous operations compared to callbacks. It uses the `.then()` method for success and `.catch()` for errors.

**To run:**
```bash
node promiseExample.js
```

### 3. Async/Await (`asyncAwaitExample.js`)

This example uses `async/await` syntax, which is syntactic sugar over Promises. It makes asynchronous code look and behave more like synchronous code, making it easier to read and write.

**To run:**
```bash
node asyncAwaitExample.js
```

### 4. Full CRUD Example with Async/Await (`fullCrudExample.js`)

This example demonstrates a complete Create, Read, and Delete (CRUD) flow for a file using `async/await`. It creates a file, writes to it, reads its content, and then deletes it. This script does not require `sample.txt`.

**To run:**
```bash
node fullCrudExample.js
```

## Summary

This repository serves as a simple reference for understanding the evolution of asynchronous programming in Node.js, from callbacks to Promises and `async/await`.
