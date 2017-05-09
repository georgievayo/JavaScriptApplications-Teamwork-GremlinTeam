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
        $("#main").append("<div class=\"welcome-msg\">Welcome to Forkstare!<br/><p>Find the best recipes to discover, try, create, or share with any kitchen in the world. <br/>Access over 20000 short recipes from local experts.</p></div>");        
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