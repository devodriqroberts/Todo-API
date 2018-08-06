const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp', {
    useNewUrlParser: true
});

let Todo = mongoose.model('Todo', {
    text: {
        type: String
    },
    completed: {
        type: Boolean
    },
    completedAt: {
        type: Number
    }
});

// let newTodo = new Todo({
//     text: 'Make a sandwich'
// });

// newTodo.save().then((result) => {
//     console.log('Todo Saved', result);
// }, (e) => {
//     console.log('Unable to save todo');
// });

let beGreat = new Todo({
    text: 'Learn MongoDB and Mongoose',
    completed: true
});

beGreat.save().then((res) => {
    console.log('Be Great');
}, (e) => {
    console.log("Error being great, try again");
});