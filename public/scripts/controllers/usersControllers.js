let usersControllers = {
    register: function () {
        templates.get("register")
            .then((template) => {
                let templateFunc = handlebars.compile(template);
                let html = templateFunc();
                $("#main").html(html);

                $("#btn-register").on("click", (ev) => {
                    let user = {
                        username: $("#tb-username").val(),
                        password: $("#tb-pass").val()
                    };
                    dataService.register(user)
                        .then(function () {
                            window.location.replace('#/home');
                        });
                });
            });
    },
    login: function () {
        templates.get("login")
            .then((template) => {
                let templateFunc = handlebars.compile(template);
                let html = templateFunc();
                $("#main").html(html);
                $("#btn-login").on("click", (ev) => {
                    let user = {
                        username: $("#tb-username").val(),
                        password: $("#tb-pass").val()
                    };
                    dataService.login(user)
                        .then((res) => {
                            // if user was not logged in
                            if(res === null){
                                alert("Username or password is invallid!");
                                return;
                            }                           
                                alert("You have been logged in!");
                                window.location = '#/home';
                                $("#login-form").remove();
                                $("#login").hide();
                                $("#logout").show();
                        });
                });
            });
    },
    logout: function () {
        dataService.logout();
    },
    all: function () {
        requester.getJSON("/api/users")
            .then((data) => {
                let users = data.result;
                return templates.get("allUsers")
            })
            .then((template) => {
                let templateFunc = handlebars.compile(template);
                let html = templateFunc();
                $("#main").html(html);
            })
    },
};