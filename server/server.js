const express = require('express');
const bodyParser = require('body-parser');

let app = express();

//Require local files
let {
    mongoose
} = require('./db/mongoose');

let {
    Todo
} = require('./models/todo');

let {
    User
} = require('./models/user');



//Middleware
app.use(bodyParser.json());



//POST todos
app.post('/todos', (req, res) => {
    let todo = new Todo({
        text: req.body.text
    })

    todo.save().then((result) => {
        console.log('Todo saved');
        res.send(result);
    }).catch((err) => {
        console.log('There was an error saving the todo', err);
        res.status(400).send(err);
    });
});



//GET todos

app.listen(3000, () => {
    console.log('Started on port 3000');
});

module.exports = {
    app
};