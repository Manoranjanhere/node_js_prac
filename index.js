const express = require("express")
const app = express()
console.dir(app)
let port =8080;
app.listen(port, ()=>
{
    console.log(`app is listening on port ${port}`)
})
app.get("/",(req,res)=>
{
    res.send("you contacted root path")
})
app.get("/home",(req,res)=>
{
    res.send("you contacted home path")
})
app.get("/search",(req,res)=>
{
    let {q}=req.query;
    res.send(`search results for query ${q}`)
    res.send("you contacted search path")
})
// app.get("*",(req,res)=>
// {
//     res.send("This path doesnot exit")
// })
app.get("/:username/:id", (req, res) => {
    let {username,id}=req.params;
    res.send(`hello, i am root ${username}`);
}) 
// app.use((req,res)=>{
//     console.log("request receivied")
    
//     res.send("this is a basic response")
// })

//we use express for req listening, req parse to object, req route, and send suitable response.