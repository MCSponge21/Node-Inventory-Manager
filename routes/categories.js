const express = require('express');
const router = express.Router();
const bodyParser = require("body-parser")
const test = require("../db");
const {getComponentName, getObjectWithName, deleteCategory, deleteItem, getObject, createCategory, editCategory, addComponent, editComponent, idCount} = require("../functions");
router.use(bodyParser.json());
router.use(express.urlencoded({ extended: false }));


router.get("/", (req, res)=>{
    res.render("catergory", {compList: test});
    console.log(test);
});

router.get("/", (req, res)=>{
    res.render("catergory", {compList: test});
});

router.get("/create", (req,res) =>{
    res.render("create_category");
});

router.post("/create", (req, res) => {
    createCategory(req.body.component, req.body.description);
    res.redirect("/categories");
});

router.get("/edit/:id", (req, res) => {
    const comp = getObjectWithName(req.params.id);
    res.render("edit_category", {identifier: req.params.id, comp: comp});
});

router.post("/edit/:id", (req, res) => {
    editCategory(req.body.component, req.body.description, req.params.id);
    res.redirect(`/categories`);
});


router.post("/delete/:id", (req, res) =>{
    const componentName = req.params.id;
    deleteCategory(req.params.id);
    res.redirect(`/categories`)
});

module.exports = router;