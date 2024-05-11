require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;

app.use(express.static("public"));
app.set("view engine","hbs");

app.get("/",(req,res) => {
    res.status(201).render("index");
})

app.listen(port,() => {
    console.log(`http://localhost:${port}`);
})