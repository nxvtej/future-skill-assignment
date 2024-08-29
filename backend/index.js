/** @format */

const express = require("express");
const router = require("./routes/index.js");
const cors = require("cors");
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());
app.use("/api/v1", router);

app.get("/ping", (req, res) => {
	res.send("server is healthy");
});

app.listen(PORT, () => {
	console.log(`server runnign at ${PORT}`);
});
