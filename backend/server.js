require('dotenv').config()
const express = require('express')
const cors = require('cors')
const db = require('./db')
const { successResponse, errorResponse, ERROR_CODES } = require('./src/utils/response');
const app = express()
app.use(cors())
app.use(express.json())

// GET all equipment
const apiRoutes = require('./src/routes');
app.use('/api', apiRoutes);

// 404 Handler
app.use((req, res) => {
  return errorResponse(res, `Route ${req.originalUrl} not found`, 404, ERROR_CODES.RESOURCE_NOT_FOUND);
});

// Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  const statusCode = err.status || err.statusCode || 500;
  return errorResponse(res, err, statusCode);
});

const PORT = process.env.PORT || 5001

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})

