const idGenerator = require('../Utils/id-generator.js')();

module.exports = (db) => {
    return {
        getRecent: (req, res) => {
            let recipes = db.get('recipes').value();
            recipes.sort((a, b) => a.id > b.id ? 0 : 1);
            const recent = recipes.slice(0, 9);
            res.send({ result: recent });
        },
        getMostPopular: (req, res) => {
            let recipes = db.get('recipes').value();
            recipes.sort((a, b) => a.likes > b.likes ? 0 : 1);
            const popular = recipes.slice(0, 9);
            res.send({ result: popular });
        },
        getAllRecipes: (req, res) => {
            let recipes = db.get('recipes').value();
            res.send({ result: recipes });
        },
        getRecipe: (req, res) => {
            let recipe = db.get("recipes")
                .find({ id: +req.params.id })
                .value();
            res.send({ result: recipe });
        },
        search: (req, res) => {
            let recipeName = req.body.data.toLowerCase();
            let recipes = db.get("recipes").value();
            let foundRecipes = [];
            recipes.forEach((recipe) => {
                let toLower = recipe.name.toLowerCase();
                if (toLower.includes(recipeName)) {
                    foundRecipes.push(recipe);
                }
            });
            res.send({ result: foundRecipes });
        },
        postRecipe: (req, res) => {
            var user = req.body.headers;
            if (!user) {
                res.send('Not authorized User');
                return;
            }
            let newRecipe = req.body.data;
            newRecipe.id = idGenerator();
            db.get('recipes')
                .push(newRecipe)
                .write();
            res.status(200);
        },
        updateRecipe: (req, res) => {
            let id = +req.params.id;
            if (req.body.hasOwnProperty("comment")) {
                let comment = req.body;
                db.get("recipes")
                    .find({ id: id })
                    .get('comments')
                    .push(comment)
                    .write();
            }
            else {
                let likes = +db.get("recipes")
                    .find({ id: id })
                    .get('likes').value();

                db.get("recipes")
                    .find({ id: id })
                    .get("likes")
                    .pop()
                    .write();

                db.get("recipes")
                    .find({ id: id })
                    .get("likes")
                    .push(++likes)
                    .write();

            }
            let comments = db.get("recipes")
                .find({ id: id })
                .get('comments').value();
            res.send({ result: comments });
        }
    }
};