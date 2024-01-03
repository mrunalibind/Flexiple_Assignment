let { sequelize, users, tables, restaurants, payments}=require("./models");

let express=require("express");
let app=express();
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Homeee");
})

sequelize.sync().then(()=>{
    app.listen(7070,()=>{
        console.log("Server is running on port 6070");
    })
})