const express = require("express");
const lowdb = require("lowdb");
let db = lowdb('./data/data.json');
const bodyParser = require('body-parser');
const dataControllers = require('./controllers/data-controllers')(db);
const userControllers = require('./controllers/user-controllers')(db);
const keyGenerator = require('./Utils/auth-key-generator');

let app = express();
app.use(express.static('public'));
app.use(bodyParser.json());

app.get("/api/recent", dataControllers.getRecent);
app.get("/api/popular", dataControllers.getMostPopular);
app.get("/api/recipes", dataControllers.getAllRecipes);
app.get("/api/recipes/details/:id", dataControllers.getRecipe);
app.get("/api/users", userControllers.getUsers);

app.post("/api/users/register", userControllers.register);
app.post("/api/recipes", dataControllers.postRecipe);

app.listen(3000, () => {
    console.log("App is running on localhost:3000");
});

