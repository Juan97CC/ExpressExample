let express = require('express')

let app = express()

app.use("/hello", (req, res) => {
    res.write("Hello Express JS")
    res.end()
})


app.get("/user", (req, res) => {
    let fN = req.query.fnm;
    let lN = req.query.lnm;

    let answer = "First Name : " +fN+ " Last Name : " +lN;
    res.send(answer)
})

app.post("/user/:fnm/:lnm", (req, res) =>{
    
    let fN = req.params.fnm
    let lN = req.params.lnm

    let answer = "First Name : " +fN+ " Last Name : " +lN;
    res.send(answer)

})






let server = app.listen(8088, () => {
    let host = server.address().address
    let port = server.address().port

    console.log("Server running at http://%s:%s", host, port)
})