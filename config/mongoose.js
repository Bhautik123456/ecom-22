const { Long } = require('mongodb');
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/E-Commerce');

const db = mongoose.connection;
db.once('open',(err)=>{
    if (!err) {
        console.log("db is connected");
    } else {
        console.log("db is not connected");
    }
})

