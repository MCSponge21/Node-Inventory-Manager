const express = require('express');
const app = express();
const bodyParser = require("body-parser")
require('dotenv').config();
app.set('view engine', 'ejs');
const categoriesRoute = require("./routes/categories");
const componentsRoute = require("./routes/components");
const test = require("./db");

app.use('/components', componentsRoute);
app.use('/categories', categoriesRoute);
app.use('/public', express.static('public'));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

app.listen(8000, async ()=>{
    console.log(test);
});



app.get("/", (req, res) =>{
    res.render("index", {compList: test});
});



app.get("/items", (req, res) =>{
    res.render("items", {compList: test});
});