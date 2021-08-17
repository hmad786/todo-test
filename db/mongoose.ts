// require the library
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

//dotenv.config({path: '../.env'});
//const db = process.env.DATABASE;

const db ='mongodb://localhost:27017/todo-db';

mongoose.connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology:true,
    useFindAndModify:false

}).then(()=> {
    console.log('Connection Succssful');
}).catch((err) => console.log('No mongo_Db Connection'));

module.exports = db;