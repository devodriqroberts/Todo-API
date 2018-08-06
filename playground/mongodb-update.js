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

    // db.collection('Todos').findOneAndUpdate({
    //     text: 'Make a sandwich'
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Users').findOneAndUpdate({
    //     _id: new ObjectId("5b67ba6d9c8a061ba7a2c211")
    // }, {
    //     $set: {
    //         name: "Vod"
    //     },
    //     $inc: {
    //         age: 1
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });




    //client.close();
});