const express = require("express")
const router   = require("./routes/index.js")

const app = express();

const PORT = 3000
app.use("/api/v1", router);

app.get("/ping", (req, res)=>{
    res.send("server is healthy")
})

app.listen(PORT, () => {
    console.log(`server runnign at ${PORT}`)
})