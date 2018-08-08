const express = require('express');
const bodyParser = require('body-parser');
const {
    ObjectID
} = require('mongodb');

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
    });

    todo.save().then((result) => {
        console.log('Todo saved');
        res.send(result);
    }).catch((err) => {
        console.log('There was an error saving the todo', err);
        res.status(400).send(err);
    });
});



//GET todos

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({
            todos
        });
    }, (e) => {
        res.status(400).send(e);
    });
});

//GET /todos/123456
app.get('/todos/:id', (req, res) => {
    let id = req.params.id;

    //Validate id 
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    Todo.findById(id).then((todo) => {
        if (!todo) {
            return res.status(404).send();
        }

        res.send({
            todo
        });
    }).catch((e) => {
        res.status(400).send();
    });
});




//App start server
app.listen(3000, () => {
    console.log('Started on port 3000');
});

module.exports = {
    app
};