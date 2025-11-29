// src/index.js

const express = require('express');
const app = express();
const PORT = 3000;

// Import the router
const postRouter = require('./routers/posts.routes');

app.get('/', (req, res) => {
  res.send('Welcome to the Blogify API!');
});

// Mount the router
app.use('/api/v1/posts', postRouter);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/`);
});
