const express = require('express');
const auth = require('./middleware/auth');
const validateDate = require('./middleware/validateDate');
const validateDescription = require('./middleware/validateDescription');
const validateName = require('./middleware/validateName');
const validatePrice = require('./middleware/validatePrice');
const validateSignupFields = require('./middleware/validateSignupFields');
const generateToken = require('./utils/generateToken');

const app = express();
app.use(express.json());

app.post(
  '/activities',
  auth,
  validateName,
  validatePrice,
  validateDescription,
  validateDate,
  (req, res) => {
    res.status(201).json({message: 'Atividade cadastrada com sucesso!'});
  }
);

app.post('/signup', validateSignupFields, (req, res) => {
  const token = generateToken();
  res.status(200).json({token});
});

module.exports = {
  app,
};
