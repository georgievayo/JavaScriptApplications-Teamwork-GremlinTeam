let usersControllers = {
    register: function (context) {
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
                            toastr.success('User registered!');
                            context.redirect('#/');
                            document.location.reload(true);
                        });
                });
            });
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
    }
};