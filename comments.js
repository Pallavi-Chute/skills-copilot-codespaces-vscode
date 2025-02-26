// Create web server
// 1. Load express
// 2. Create an express application
// 3. Add a route
// 4. Start the server

// 1. Load express
const express = require('express');
const comments = require('./comments');

// 2. Create an express application
const app = express();
// 3. Add a route
app.get('/comments', (req, res) => {
    res.json(comments);
});
// 4. Start the server
app.listen(3000, () => {
    console.log('Server started');
});