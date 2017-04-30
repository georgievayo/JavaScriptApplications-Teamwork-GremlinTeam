let dataService = (function () {
    const SESSION_STORAGE_USERNAME_KEY = 'signed-in-user-username',
        SESSION_STORAGE_AUTHKEY_KEY = 'signed-in-user-auth-key';

    function create(recipe) {
        return requester.postJSON("/api/recipes", recipe);
    };

    function register(user) {
        let reqUser = {
            username: user.username,
            passHash: CryptoJS.SHA1(user.username + user.password).toString()
        };

        return requester.postJSON("/api/users/register", {
            data: reqUser
        })
            .then(function (res) {
                let user = res.result;
                sessionStorage.setItem(SESSION_STORAGE_USERNAME_KEY, user.username);
                sessionStorage.setItem(SESSION_STORAGE_AUTHKEY_KEY, user.authKey);
                return {
                    username: res.result.username
                };
            })
    };

    function login(user) {
        let reqUser = {
            username: user.username,
            passHash: CryptoJS.SHA1(user.username + user.password).toString()
        };
        return requester.putJSON("/api/users/login", { data: reqUser })
            .then((res) => {
                let user = res.result;
                sessionStorage.setItem(SESSION_STORAGE_USERNAME_KEY, user.username);
                sessionStorage.setItem(SESSION_STORAGE_AUTHKEY_KEY, user.authKey);
                return user;
            });
    };

    return {
        create,
        register,
        login
    };
}());
