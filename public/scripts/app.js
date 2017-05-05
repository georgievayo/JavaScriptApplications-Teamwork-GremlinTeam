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
    .on('/about', controllers.about)
    .on('/users/logout', usersControllers.logout)
    .on('/home', () => {
    })
    .on(() => {
        router.navigate("#/home");
		$('#main').children().remove();
    })
    .resolve();

    $("#logout").hide();
    
    // $("#logout").on("click", (ev) => {
    //     usersControllers.logout()
    //     alert("You have been logged out!");
    //     $("#logout").hide();
    //     $("#login").show();        
    // });

    // $("#btn-search").on("click", (ev) => {

    // })