require('dotenv').config()
let express = require('express');
let app = express();
app.use('/public', express.static(__dirname+'/public'));
app.use(function middleware(req, res, next){
    var string = req.method+" "+req.path+" - "+req.ip;
    console.log(string);
    next();
});

const middleware = (req, res, next) => {
    req.time = new Date().toString();
    next();
  };
  
  app.get("/now", middleware, (req, res) => {
    res.send({
      time: req.time
    });
  });

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/views/index.html')
})
app.get('/json', (req, res) => {
    if(process.env.MESSAGE_STYLE === "uppercase"){
        res.json({"message": "HELLO JSON"})
    }
    else{
        res.json({"message": "Hello json"})
    }
})


console.log("Hello World")




































 module.exports = app;
