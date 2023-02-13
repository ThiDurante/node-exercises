const express = require('express');

const employeesController = require('./Controllers/employeesController');

const app = express();
app.use(express.json());

app.get('/employees', employeesController.getAll);

app.post('/employee', employeesController.create);

app.use((error, _req, res, _next) => {
  console.log(error);
  if (error.status) {
    return res.status(error.status).json({ message: error.message });
  }
  return res.status(500).json({ message: 'Internal server error' });
});

module.exports = app;
