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
                        password: $("#tb-pass").val(),
                        firstName: $("#tb-first-name").val(),
                        lastName: $("#tb-last-name").val(),
                        email: $("#tb-email").val()
                    };

                    $("#tb-username").val("");
                    $("#tb-pass").val("");
                    $("#tb-first-name").val("");
                    $("#tb-last-name").val("");
                    $("#tb-email").val("");

                    dataService.register(user)
                        .then(function (res) {
                            if (!res.result) {
                                toastr.error("Username is already taken!");
                            }
                            else {
                                toastr.success("You have been successfully registered!");
                                $(".register").remove();
                            }
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
                            if (!res.result) {
                                toastr.error("Username or password is invallid!");
                                return;
                            }

                            toastr.success("You have been logged in!");
                            $(".login").remove();
                            $("#login").hide();
                            $("#logout").show();
                        });
                });
            });
    },
    logout: function () {
        dataService.logout();
        toastr.success("You have been logged out!");
        $("#logout").hide();
        $("#login").show();

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

if (typeof module !== 'undefined') {
    module.exports = (function () {
        return [
            usersControllers
        ];
    })();
}