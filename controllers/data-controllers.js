let dataControllers = {
    getRecent: function (db) {
        let recipes = db.get('recipes').value();
        recipes.sort((a, b) => a.id > b.id ? 0 : 1);
        const recent = recipes.slice(0, 9);
        return recent;
    },
    getMostPopular: function (db) {
        let recipes = db.get('recipes').value();
        recipes.sort((a, b) => a.likes > b.likes ? 0 : 1);
        const popular = recipes.slice(0, 9);
        return popular;
    },
    getAllRecipes: function (db) {
        let recipes = db.get('recipes').value();
        return recipes;
    }
};
module.exports = dataControllers;
