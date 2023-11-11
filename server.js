
const express = require('express');
const app = express();
const cors = require('cors');
 
var corsOptions = {
    origin: ["http://localhost:4200","http://localhost"],
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions));
app.use(express.json());
app.listen(4000, function(){ console.log('Server is running at port: ', 4000);  });

app.post ('/FunAPI/ProcessQuestion', function(req, res) {
    console.log ('body', req.body.questionText)
    openFun (res, req.body.questionText)
});
 

const openFun=async(res, pMessage)=>{
    myAnswer:String;
    switch (pMessage) {
        case "Can anyone attend the PUG challenge?":
            this.myAnswer = "Are you picturing little dogs jumping through hoops?";
            break;
        default:
            this.myAnswer = "That is a stupid question?";
            break;
    }
    res.status(200).send({'result': this.myAnswer});
}
