var handlebars = handlebars || Handlebars;
const $navButtons = $("#nav-buttons").children();
const $recentButton = $('#nav-recent');
const $popularButton = $('#nav-popular');
const $allButton = $('#nav-all');
const $aboutButton = $('#nav-about');

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
                $navButtons.removeClass();
                $allButton.addClass('active');
            })
    },
    recent: function () {
        requester.getJSON("/api/recent")
            .then((data) => {
                recipes = data.result;
                return templates.get("allRecipes");
            })
            .then((template) => {
                let templateFunc = handlebars.compile(template);
                let html = templateFunc(recipes);
                $("#main").html(html);
                $navButtons.removeClass();
                $recentButton.addClass('active');
            })
    },
    popular: function () {
        requester.getJSON("/api/popular")
            .then((data) => {
                recipes = data.result;
                return templates.get("allRecipes");
            })
            .then((template) => {
                let templateFunc = handlebars.compile(template);
                let html = templateFunc(recipes);
                $("#main").html(html);
                $navButtons.removeClass();
                $popularButton.addClass('active');
            })
    },
    details: function (params) {
        let id = params.id;
        let recipe = {};

        requester.getJSON(`/api/recipes/details/${id}`)
            .then((data) => {
                recipe = data.result;
                dataService.hasLoggedUser()
                    .then((hasUser) => {
                        console.log(hasUser);
                        if (hasUser) {
                            return templates.get("singleRecipeLoggedUser");
                        }
                        else {
                            return templates.get("singleRecipe");
                        }
                    })
                    .then((template) => {
                        console.log(template);
                        let templateFunc = handlebars.compile(template);
                        let html = templateFunc(recipe);
                        $("#main").html(html);
                    })
            })
            ;
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

                    dataService.create(recipe)
                        .then((res) => {
                            alert("The recipe was added successfully!");
                        })
                })
            })
    },
    about: function(){
        templates.get("about")
        .then((template) => {
            let templateFunc = handlebars.compile(template);
            let html = templateFunc();
            $("#main").html(html);
        })
    }
};
