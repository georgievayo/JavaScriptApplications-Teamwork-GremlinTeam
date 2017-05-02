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
        }
    }
};