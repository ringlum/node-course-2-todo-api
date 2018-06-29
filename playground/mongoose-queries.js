const { ObjectID } = require('mongodb');
const { mongoose } = require('./../server/db/mongoose');
// const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

var id = '5b30eff88a0ec7518385f11d';

// if (!ObjectID.isValid(id)) {
//     console.log('ID is not valid');
// }

// Todo.find({
//    _id: id 
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id 
//  }).then((todo) => {
//      console.log('Todo', todo);
//  });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('ID not found!')
//     }
//     console.log('Todo by Id', todo);
// }).catch((e) => console.log(e));


// User.findById - query works but no user user not found - user was found - catch any errors.

User.findById(id).then((user) => {
    if (!user) {
        return console.log('User not found!')
    }
    console.log(JSON.stringify(user,undefined,2));
}).catch((e) => console.log(e));