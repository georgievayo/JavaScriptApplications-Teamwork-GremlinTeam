var handlebars = handlebars || Handlebars;

let controllers = {
    all: function () {
        let recipes = [];
        requester.getJSON("/api/recipes")
            .then((data) => {
                recipes = data.result;
                return templates.get("allRecipes");
            })
            .then((template) => {
                let templateFunc = handlebars.compile(template);
                let html = templateFunc(recipes);
                $("#main").html(html);

            })
    },
    recent: function(){
        requester.getJSON("/api/recent")
            .then((data) => {
                recipes = data.result;
                return templates.get("allRecipes");
            })
            .then((template) => {
                let templateFunc = handlebars.compile(template);
                let html = templateFunc(recipes);
                $("#main").html(html);
            })
    },
    popular: function(){
        requester.getJSON("/api/popular")
            .then((data) => {
                recipes = data.result;
                return templates.get("allRecipes");
            })
            .then((template) => {
                let templateFunc = handlebars.compile(template);
                let html = templateFunc(recipes);
                $("#main").html(html);
            })
    },
    details: function (params) {
        let id = params.id;
        let recipe = {};

        requester.getJSON(`/api/recipes/details/${id}`)
            .then((data) => {
                recipe = data.result;
                console.log(recipe);
                return templates.get("singleRecipe");
            })
            .then((template) => {
                let templateFunc = handlebars.compile(template);
                let html = templateFunc(recipe);
                $("#main").html(html);
            });
    },
    create: function () {
        templates.get("createRecipe")
            .then((template) => {
                let templateFunc = handlebars.compile(template);
                let html = templateFunc();
                $("#main").html(html);
                $("#btn-add").on("click", (ev) => {
                    let recipe = {
                        name: $("#tb-name").val(),
                        img: $("#tb-img").val()
                    };

                    dataService.create(recipe);
                })
            })
    }


};
