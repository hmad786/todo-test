const app = require("./app");

const port = 7000;

// make the app to listen on asigned port number
app.listen(port, (err) => {
    if(err){
        console.log(`Error in running the server : ${err}`);
    }

    console.log(`Server is running on port : ${port}`);
});
