//const MongoClient = require('mongodb').MongoClient;
const {
    MongoClient
} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connet the mongodb servers');
    }
    console.log('Connected to mongodb server');
    const db = client.db('TodoApp')

    // db.collection('Todos').insertOne({
    //     text: "Something to do",
    //     completed: false,
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo');
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //     name: "Devodriq Roberts",
    //     age: 24,
    //     location: 'Georgia',
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert user into Users db');
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));

    // });

    client.close();
});