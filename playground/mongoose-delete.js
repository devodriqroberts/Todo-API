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


// Todo.remove({}).then((res) => {
//     console.log(res);
// });

//Todo.findOneAndRemove({})

Todo.findByIdAndRemove('5b6a56f9c324f2e87e92f81d').then((res) => {
    console.log(res);
})