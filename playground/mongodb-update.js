const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server!');
    }
    console.log('Connected to MongoDB server');

    //findOneAndUpdate
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5b28ba24912e2f450334e376')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {returnOriginal : false
    // }). then((result) => {
    //     console.log(result);
    // }); 

    //findOneAndUpdate
    db.collection('Users').findOneAndUpdate({
            _id: new ObjectID('5b27a559a28354af0282fe80')
        }, 
        {
            // $set: {
            //     name: 'Pookie, the cat'
            // },
            $inc: {
                age: -0.5
            }
        }, 
        {
            returnOriginal : false
    }).then((result) => {
        console.log(result);
    }); 

    // db.close()
});