let router = new Navigo(null, true);
router
    .on('/recipes', controllers.all)
    .on('/recent', controllers.recent)
    .on('/popular', controllers.popular)
    .on('/recipes/:id', controllers.details)
    .on('/create', controllers.create)
    .on('/users', usersControllers.all)
    .on('/users/register', usersControllers.register)
    .on('/users/login', usersControllers.login)
    .on('/home', () => {
    })
    .on(() => {
        router.navigate("#/home");
    })
    .resolve();

    $("#logout").hide();
    
    $("#logout").on("click", (ev) => {
        usersControllers.logout()
        alert("You have been logged out!");
        $("#logout").hide();
        $("#login").show();        
    });