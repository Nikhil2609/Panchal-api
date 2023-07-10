import express from 'express';

const app = express(); 
const bodyParser = require('body-parser');

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')) 

app.get('/',async (req,res)=>{
    res.send("Hello World Node js")
});

app.get('/user',(req,res)=>{
    res.send("Hello Users")
});

app.get('*', function(req, res){
    res.send("404 : Page Not Found ");
  });
  
const port = process.env.PORT || 2000;
app.listen(port,()=>{
    console.log("server running on port",port);
});

module.exports = app;