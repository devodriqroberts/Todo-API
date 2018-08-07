const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp', {
    useNewUrlParser: true
});

// let Todo = mongoose.model('Todo', {
//     text: {
//         type: String,
//         required: true,
//         minlength: 1,
//         trim: true
//     },
//     completed: {
//         type: Boolean,
//         default: false
//     },
//     completedAt: {
//         type: Number,
//         default: null
//     }
// });

// let newTodo = new Todo({
//     text: 'Make a sandwich'
// });

// newTodo.save().then((result) => {
//     console.log('Todo Saved', result);
// }, (e) => {
//     console.log('Unable to save todo');
// });

// let beGreat = new Todo({
//     text: 'Learn MongoDB and Mongoose',
//     completed: true
// });

// beGreat.save().then((res) => {
//     console.log('Be Great');
// }, (e) => {
//     console.log("Error being great, try again");
// });

// let beGreat = new Todo({

// });

// beGreat.save().then((res) => {
//     console.log('Be Great');
// }, (e) => {
//     console.log("Error being great, try again");
// });

let User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
});

let newUser = new User({
    name: 'Devodriq',
    email: 'test1@gmail.com'
});

newUser.save().then((result) => {
    console.log('User Saved', result);
}, (e) => {
    console.log('There was an error saving the user', e);
});