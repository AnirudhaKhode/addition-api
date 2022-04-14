var express=require("express");
var app=express();
var cors=require("cors");
var bodyParser=require("body-parser");
const { json } = require("body-parser");

app.listen(3000);
app.use(cors());
var url=bodyParser.urlencoded({extended:false});
app.use(bodyParser.json());

app.post("/users",url, (req,res)=>{
a=req.body.numbers;
f=true
username=req.body.user_id;
odd=[];
even=[];
c=0;
c1=0;
for(i=0;i<a.length;i++)
{
if((a[i]>='A' && a[i]<='Z')||(a[i]>='a' & a[i]<='z'))
{
    f=false;
    break;
}
x=parseInt(a[i]);
if(x%2==0)
 even[c++]=x;
else
odd[c1++]=x;
}
j={"is_success":f , "user_id":username, "odd":odd, "even":even}

res.send(j);
});