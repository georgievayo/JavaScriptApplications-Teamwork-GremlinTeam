const express = require("express");
const lowdb = require("lowdb");
const bodyParser = require('body-parser');
const dataControllers = require('./controllers/data-controllers');

let app = express();
let db = lowdb('./data/data.json');
app.use(express.static('public'));

app.use(bodyParser.json());
app.get("/api/recent", (req, res) => {
    let recent = dataControllers.getRecent(db);
    res.send({ result: recent });
});

app.get("/api/popular", (req, res) => {
    let popular = dataControllers.getMostPopular(db);
    res.send({ result: popular });
});

app.get("/api/recipes", (req, res) => {
    let recipes = dataControllers.getAllRecipes(db);
    res.send({ result: recipes });
});

app.get("/api/recipes/details/:id", (req, res) => {
    let recipe = db.get("recipes")
        .find({ id: +req.params.id })
        .value();
    res.send({ result: recipe });
});

app.get("/api/users", (req, res) => {
    let users = db.get("users")
        .value();
    res.send({ result: users });
});

app.post("/api/users/register",(req, res) => {
    var user = req.body;
      user.usernameLower = user.username.toLowerCase();
      user.authKey = authKeyGenerator.get(user.id);
      if (db('users').find({
          usernameLower: user.username.toLowerCase()
        })) {
        res.status(400)
          .json('Username is already taken');
        return;
      }
      db('users').insert(user);

      res.status(201)
        .json({
          result: user
        });
});

app.post("/api/recipes", (req, res) => {
    let newRecipe = req.body;
    db.get('recipes')
        .push(newRecipe)
        .write();
    res.status(200);
});

app.listen(3000, () => {
    console.log("app is running");
});

