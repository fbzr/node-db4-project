require('dotenv').config();
const express = require('express');
const server = express();

const errorMiddleware = require('./api/middleware/error');

server.use(express.json());
// routes
server.use('/api/recipes', require('./api/routes/recipes'));
server.use('/api/ingredients', require('./api/routes/ingredients'));

// error middleware
server.use(errorMiddleware);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`**** Server running on port ${PORT} ****`));