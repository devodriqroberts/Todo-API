//const MongoClient = require('mongodb').MongoClient;
const {
    MongoClient,
    ObjectId
} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connet the mongodb servers');
    }
    console.log('Connected to mongodb server');
    const db = client.db('TodoApp')

    //deleteMany
    // db.collection('Todos').deleteMany({
    //     text: "Eat lunch"
    // }).then((result) => {
    //     console.log(result);
    // });

    //deleteOne
    // db.collection('Todos').deleteOne({
    //     text: 'Eat lunch'
    // }).then((result) => {
    //     console.log(result);
    // });

    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({
    //     completed: false
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection('Todos').deleteMany({
        text: 'Eat lunch'
    }).then((result) => {
        console.log("Success");
        console.log(result);
    });

    // db.collection('Todos').findOneAndDelete({
    //     _id: new ObjectId("5b68c748c324f2e87e92e11d")
    // }).then((result) => {
    //     console.log(result);
    // });

    //client.close();
});