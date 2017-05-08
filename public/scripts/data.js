let dataService = (function () {
    const SESSION_STORAGE_USERNAME_KEY = "signed-in-user-username",
        SESSION_STORAGE_AUTHKEY_KEY = "signed-in-user-auth-key";

    function create(recipe) {
        var options = {
            data: recipe,
            headers: {
                "x-auth-key": sessionStorage.getItem(SESSION_STORAGE_AUTHKEY_KEY)
            }
        };
        return requester.postJSON("/api/recipes", options);
    };

    function register(user) {
        let reqUser = {
            username: user.username,
            passHash: CryptoJS.SHA1(user.username + user.password).toString(),
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email
        };

        return requester.postJSON("/api/users/register", {
            data: reqUser
        });
    };

    function login(user) {
        let reqUser = {
            username: user.username,
            passHash: CryptoJS.SHA1(user.username + user.password).toString()
        };
        return requester.putJSON("/api/users/login", { data: reqUser })
            .then((res) => {
                if(res.result){
                let user = res.result;
                sessionStorage.setItem(SESSION_STORAGE_USERNAME_KEY, user.username);
                sessionStorage.setItem(SESSION_STORAGE_AUTHKEY_KEY, user.authKey);
            }
                return res;            
            });
    };

    function logout() {
        requester.postJSON("/api/users/logout");
        sessionStorage.removeItem("signed-in-user-username");
        sessionStorage.removeItem("signed-in-user-auth-key");
    }

    function hasLoggedUser() {
        let currentUser = {
            username: sessionStorage.getItem(SESSION_STORAGE_USERNAME_KEY),
            authKey: sessionStorage.getItem(SESSION_STORAGE_AUTHKEY_KEY)
        };
        return requester.postJSON("/api/hasUser", currentUser)
            .then((data) => {
                let foundUser = data.result;
                if (foundUser === undefined) {
                    return false;
                }
                else {
                    return true;
                }
            });
    }

    return {
        create,
        register,
        login,
        logout,
        hasLoggedUser
    };
}());

if (typeof module !== "undefined") {
    module.exports = (function () {
        return [
            dataService
        ];
    })();
}