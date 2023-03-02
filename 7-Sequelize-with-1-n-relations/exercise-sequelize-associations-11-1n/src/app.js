const bodyParser = require('body-parser');
const express = require('express');
const accountController = require('./controllers/accountController');
const commentController = require('./controllers/commentController');

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/accounts/:id/comment', commentController.getCommentsByAccId);
app.post('/accounts/:id/comment', commentController.create);
app.get('/accounts/:id', accountController.getAccountById);
app.get('/accounts2/:id', accountController.getAccountByIdLazy);
app.post('/accounts', accountController.create);
/**
 * Substitua este comentário pelas suas rotas!
 */

module.exports = app;
