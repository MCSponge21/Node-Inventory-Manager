const express = require('express');
const router = express.Router();
const test = require("../db");
const bodyParser = require("body-parser")
const {getComponentName, getObjectWithName, deleteCategory, deleteItem, getObject, createCategory, editCategory, addComponent, editComponent, idCount} = require("../functions");
router.use(bodyParser.json());
router.use(express.urlencoded({ extended: false }));

router.get("/:id", (req,res) =>{
    var component = req.params.id;
    res.render("components", {compList: test, identifier: component});
});

router.get("/create/:id", (req, res) =>{
    var identifier = req.params.id;
    res.render("create", {identifier: identifier});
});

router.get("/edit/:id", (req, res) =>{
    const item = getObject(req.params.id);
    res.render("edit", {item: item, identifier: req.params.id});
});

router.post("/edit/:id", (req, res) => {
    editComponent(req.params.id, req.body);
    res.redirect(`/components/view/${req.params.id}`)
});

router.get("/view/:id", (req, res) =>{
    const item = getObject(req.params.id);
    const componentName = getComponentName(req.params.id);
    res.render("viewitem", {item: item, componentName: componentName});
});

router.post("/create/:id", (req, res) =>{
    console.log(req.params.id, req.body);
    addComponent(req.params.id, req.body);
    res.redirect(`/components/${req.params.id}`);
});

router.post("/delete/:id", (req, res) =>{
    const componentName = getComponentName(req.params.id);
    deleteItem(req.params.id);
    res.redirect(`/components/${componentName}`);
});

module.exports = router;