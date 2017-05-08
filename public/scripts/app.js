let router = new Navigo(null, true);
router
    .on("/recipes", controllers.all)
    .on("/recent", controllers.recent)
    .on("/popular", controllers.popular)
    .on("/recipes/:id", controllers.details)
    .on("/create", controllers.create)
    .on("/users", usersControllers.all)
    .on("/users/register", usersControllers.register)
    .on("/users/login", usersControllers.login)
    .on("/about", controllers.about)
    .on("/users/logout", usersControllers.logout)
    .on("/home", () => {
    })
    .on(() => {
        router.navigate("#/home");
        $("#main").children().remove();
    })
    .resolve();

dataService.hasLoggedUser()
    .then((data) => {
        let activeUserPresent = data.result;
        if (!activeUserPresent) {
            $("#logout").hide();
            $("#login").show();
            $("#nav-add").remove();

        }
        else {
            $("#login").hide();
            $("#logout").show();
            $("#nav-buttons").append("<li id=\"nav-add\"><a href=\"#/create\">Add new recipe</a></li>");
        }
    });


$("#btn-search").on("click", (ev) => {
    controllers.search();
})