// const http = require("http")
// const server = http.createServer((req,res)=>
// {
//     if(req.url=="/")
//     {
//         res.writeHead(200,
//             {
//                 "Content-Type" : "text/plain"
//             })
//             res.write("hello")
//             res.end()
//     }
//     else if(req.url=="/json")
//     {
//         res.writeHead(200,
//             {
//                 "Content-Type" : "application/json"
//             })
//             let data = {
//                 book1 : "harry potter",
//                 book2 : "Twilight",
//                 book3 : "Narnia",
//                 book4 : "wings of fire"
//             }
//             res.write(JSON.stringify(data))
//             res.end()
//     }
// })

// server.listen(8000,()=>
// {
//     console.log("chalu hai")
// })
const express = require("express")
const app=express()

app.get("/home",function(req,res){
    res.send({name:"hello"})
})


 app.get("/books",function(req,res){
    res.send({ book1 : "harry potter",
                    book2 : "Twilight",
                    book3 : "Narnia",
                    book4 : "wings of fire"})
})
app.listen(7000,()=>{
    console.log("hi")
});


