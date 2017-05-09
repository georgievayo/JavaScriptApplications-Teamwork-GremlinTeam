const express = require("express");
const lowdb = require("lowdb");
let db = lowdb('./data/data.json');
const bodyParser = require('body-parser');
const dataControllers = require('./controllers/data-controllers')(db);
const userControllers = require('./controllers/user-controllers')(db);
const keyGenerator = require('./Utils/auth-key-generator');
const logger = require('./Utils/logger');

let app = express();
app.use(express.static('public'));
app.use('/libs', express.static('node_modules'));
app.use(bodyParser.json());

app.get("/api/recent", dataControllers.getRecent);
app.get("/api/popular", dataControllers.getMostPopular);
app.get("/api/recipes", dataControllers.getAllRecipes);
app.get("/api/recipes/details/:id", dataControllers.getRecipe);
app.put("/api/recipes/details/:id", dataControllers.updateRecipe);
app.put("/api/search", dataControllers.search);
app.get("/api/users", userControllers.getUsers);
app.post("/api/hasUser", userControllers.hasLoggedUser);
app.get("/api/getUser", userControllers.getLoggedUser);

app.post("/api/users/register", userControllers.register);
app.post("/api/recipes", dataControllers.postRecipe);

app.put("/api/users/login", userControllers.login);
app.post("/api/users/logout", userControllers.logout);

let port = process.env.PORT || 3000;
app.listen(port, () => {
    logger.info(`App is running on localhost:${port}`);
});

