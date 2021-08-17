const  Task  = require('../models/task');

// rendering the router Page
const todo_index = async (req, res) => {
    try {
        await Task.find({}, (err, task) => {
            if(err){
                console.log('Error in fetching tasks from db');
                return;
            }
    
            return res.render('home', {
                tittle: "Todo List",
                task: task
            });
        })
    }
    catch (error) {
        console.log(error)
     }

}
// creating task
const todo_create = async (req, res) => {
    try {
        Task.create({
            description: req.body.description,
            category: req.body.category,
            date: req.body.date
        }, (err) => {
            if (err) {
                console.log('error in creating task', err);
                return; 
            }

            return res.redirect('back');
            });
    }
    catch (error) {
        console.log(error);
     }
}
// deleting todo task

const todo_delete = async (req, res) => {
     // get the id from query
     var id = req.query;

     // checking the number of tasks selected to delete
     var count = Object.keys(id).length;
     for(let i=0; i < count ; i++){
         
         // finding and deleting tasks from the DB one by one using id
         await Task.findByIdAndDelete(Object.keys(id)[i], (err) => {
         if(err){
             console.log('error in deleting task');
             }
         })
     }
     return res.redirect('back'); 
}

module.exports = {
    todo_index,
    todo_create,
    todo_delete
};