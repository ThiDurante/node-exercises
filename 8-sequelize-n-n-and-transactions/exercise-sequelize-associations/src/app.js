const express = require('express');
const patientController = require('./controllers/patientController');
const planController = require('./controllers/planController');

const app = express();
app.use(express.json());

app.get('/patients', patientController.getAll);
app.get('/patientssur', patientController.getAllWithSurgeries);
app.get('/plan/:id', planController.getPlanPatientsById);
app.post('/patient', patientController.create);

module.exports = app;
