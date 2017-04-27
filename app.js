const express = require("express");
const lowdb = require("lowdb");
let db = lowdb('./data/data.json');
const bodyParser = require('body-parser');
const dataControllers = require('./controllers/data-controllers')(db);
const keyGenerator = require('./Utils/auth-key-generator');

let app = express();
app.use(express.static('public'));
app.use(bodyParser.json());

app.get("/api/recent", dataControllers.getRecent);
app.get("/api/popular", dataControllers.getMostPopular);
app.get("/api/recipes", dataControllers.getAllRecipes);

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
      user.usernameLower = user.data.username.toLowerCase();
      user.authKey = keyGenerator.generate(user.id);
        let foundUser = db.get('users').find({
          usernameLower: user.data.username.toLowerCase()
        }).value();
      if (foundUser !== undefined) {
        res.status(400)
          .json('Username is already taken');
        return;
      }
      console.log(db.get('users').value());
      db.get('users')
      .push(user)
      .write();

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

