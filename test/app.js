const express = require("express");
const lowdb = require("lowdb");
let app = express();
let db = lowdb('./data.json');

app.get("/recent",(req, res) => {
res.send(getRecent(db));
});

app.get("/mostpopular", (req, res) => {
res.send(getMostPopular(db));
});

app.get("/recipes",(req, res) => {
res.send(getAllRecipes(db));
});

app.listen(3000, () => {
    console.log("app is running");
});

function getRecent(db){
    let recipes = db.get('recipes').value();
    recipes.sort((a,b) => a.id > b.id ? 0 : 1);
    const recent = recipes.slice(0,9);
    return recent;
}

function getMostPopular(db){
    let recipes = db.get('recipes').value();
    recipes.sort((a,b) => a.likes > b.likes ? 0 : 1);
    const popular = recipes.slice(0,9);
    return popular;
}

function getAllRecipes(db){
    let recipes = db.get('recipes').value();
    return recipes;    
}

function addRecentTemplate(recipes){
    const handlebars = '<div>' + ''
}