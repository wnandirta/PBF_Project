//index.js

const functions = require('firebase-functions');
const app = require('express')();

const {
    getAllTodos
} = require('./APIs/todos')

app.get('/todos', getAllTodos);
exports.api = functions.https.onRequest(app);

const {
    loginUser
} = require('./APIs/users')

// Users
app.post('/login', loginUser);

const {
    signUpUser
} = require('./APIs/users')

app.post('/signup', signUpUser);

const auth = require('./util/auth');

const {
    uploadProfilePhoto
} = require('./APIs/users')

app.post('/user/image', auth, uploadProfilePhoto);

const {
    getUserDetail
} = require('./APIs/users')

app.get('/user', auth, getUserDetail);

const {
    updateUserDetails
} = require('./APIs/users')

app.post('/user', auth, updateUserDetails);

app.get('/todos', auth, getAllTodos);
app.get('/todo/:todoId', auth, getOneTodo);
app.post('/todo',auth, postOneTodo);
app.delete('/todo/:todoId',auth, deleteTodo);
app.put('/todo/:todoId',auth, editTodo);