var handlebars = handlebars || Handlebars;
const $navButtons = $("#nav-buttons").children();
const $recentButton = $("#nav-recent");
const $popularButton = $("#nav-popular");
const $allButton = $("#nav-all");
const $aboutButton = $("#nav-about");

let controllers = {
    all: function () {
        let recipes = [];
        requester.getJSON("/api/recipes")
            .then((data) => {
                recipes = (JSON.parse(JSON.stringify(data.result)));
                return templates.get("allRecipes");
            })
            .then((template) => {
                let templateFunc = handlebars.compile(template);
                let html = templateFunc(recipes);
                $("#main").html(html);
                $navButtons.removeClass();
                $allButton.addClass("active");
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
                $recentButton.addClass("active");
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
                $popularButton.addClass("active");
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
                        if (hasUser) {
                            return templates.get("singleRecipeLoggedUser");
                        }
                        else {
                            return templates.get("singleRecipe");
                        }
                    })
                    .then((template) => {
                        let templateFunc = handlebars.compile(template);
                        let html = templateFunc(recipe);
                        $("#main").html(html);

                        $("#btn-send-comment").on("click", (ev) => {
                            let username;
                            requester.getJSON("/api/getUser")
                                .then((data) => {
                                    username = data.result[0].username;
                                    let comment = $("#description").val();
                                    $("#description").val("");
                                    
                                    let commentToSend = { user: username, comment: comment };
                                    let updatedRecipe = {};
                                    requester.putJSON(`/api/recipes/details/${id}`, commentToSend)
                                        .then((data) => {
                                            let comments = data.result;
                                            let commentToShow = comments[comments.length - 1];
                                            templates.get("addComment")
                                                .then((template) => {
                                                    let templateFunc = handlebars.compile(template);
                                                    let html = templateFunc(commentToShow);
                                                    $(".comments-all").append(html);
                                                })
                                        })
                                });
                        });

                        $("#like-button").on("click", (ev) => {
                            let data = {};
                            requester.putJSON(`/api/recipes/details/${id}`, data);
                        })
                    })
            });
    },
    search: function () {
        let recipeToSearch = $("#tb-search").val();
        let foundRecipes = [];
        requester.putJSON("/api/search", { data: recipeToSearch })
            .then((recipes) => {
                foundRecipes = recipes.result;
                return templates.get("allRecipes");
            })
            .then((template) => {
                let templateFunc = handlebars.compile(template);
                let html = templateFunc(foundRecipes);
                $("#main").html(html);
            })
    },
    create: function () {
        dataService.hasLoggedUser()
            .then((hasUser) => {
                if (hasUser) {
                    templates.get("createRecipe")
                        .then((template) => {
                            let templateFunc = handlebars.compile(template);
                            let html = templateFunc();
                            $("#main").html(html);
                            $("#btn-add").on("click", (ev) => {
                                let splittedIngredients = $("#tb-ingredients").val().split(", ");
                                let ingredientsToAdd = [];
                                splittedIngredients.forEach(function (ingr) {
                                    let quantity = ingr.split(" ")[0];
                                    let unit = ingr.split(" ")[1];
                                    let ingredient = ingr.split(" ")[2];
                                    ingredientsToAdd.push({ quantity: quantity, unit: unit, ingredient: ingredient });
                                }, this);

                                let splittedSteps = $("#tb-instructions").val().split("\n");
                                let stepsToAdd = [];
                                splittedSteps.forEach(function (step) {
                                    stepsToAdd.push({ step: step });
                                }, this);

                                let recipe = {
                                    name: $("#tb-name").val(),
                                    preparationTime: $("#tb-preparation-time").val(),
                                    ingredients: ingredientsToAdd,
                                    steps: stepsToAdd,
                                    img: $("#tb-img").val(),
                                    comments: [],
                                    likes: [0]
                                };

                                dataService.create(recipe)
                                    .then((res) => {
                                        if (res === "Not authorized User") {
                                            toastr.error("The recipe was not added! Try again!")
                                        }
                                        else {
                                            toastr.success("The recipe was added successfully!");
                                            $(".createRecipe").remove();
                                        }
                                    })
                            });
                        });
                }
                else {
                    toastr.warning("You cannot add new recipe! Please, login!");
                }
            });
    },
    about: function () {
        templates.get("about")
            .then((template) => {
                let templateFunc = handlebars.compile(template);
                let html = templateFunc();
                $("#main").html(html);
            })
    }
};