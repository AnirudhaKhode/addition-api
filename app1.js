var express=require("express")
var app=express();
var cors = require("cors")
var bp = require("body-parser")

app.listen(3000,()=>{
    console.log("listening to port 3000")
})

app.use(bp.json())

app.use(cors())

var url = bp.urlencoded({extended:false})

app.post("/users",url,(req,res)=>{
    array=req.body.numbers
    user_id=req.body.user_id
    flag=true
    sum=0

    for(var i=0; i<array.length; i++){
        sum+=parseInt(array[i]);
    }
    res.send({"user_id":user_id, "sum":sum});


})
