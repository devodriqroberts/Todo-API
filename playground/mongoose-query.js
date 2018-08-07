const {
    ObjectId
} = require('mongodb');
const {
    mongoose
} = require('./../server/db/mongoose');
const {
    Todo
} = require('./../server/models/todo');
const {
    User
} = require('./../server/models/user');

//let id = '5b69082d2f679537b236c103';

// if (!ObjectId.isValid(id)) {
//     console.log('Id not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos:', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo:', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         console.log('ID not found');
//     }
//     console.log('Todo by ID:', todo);
// }).catch((e) => console.log(e));

//let id = '5b69082d2f679537b236c104';

// User.find({
//     _id: id
// }).then((user) => {
//     console.log('User found')
// });

User.findById('5b68e07392b633285a091111').then((user) => {

    if (!user) {
        return console.log('User not found');
    }
    console.log('User by Id:', user);
}).catch((e) => console.log(e));