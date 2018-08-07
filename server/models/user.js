const mongoose = require('mongoose');

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

module.exports = {
    User
};


// let newUser = new User({
//     name: 'Devodriq',
//     email: 'test1@gmail.com'
// });

// newUser.save().then((result) => {
//     console.log('User Saved', result);
// }, (e) => {
//     console.log('There was an error saving the user', e);
// });