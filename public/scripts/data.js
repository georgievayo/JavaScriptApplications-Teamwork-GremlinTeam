let dataService = (function () {
    const LOCAL_STORAGE_USERNAME_KEY = 'signed-in-user-username',
        LOCAL_STORAGE_AUTHKEY_KEY = 'signed-in-user-auth-key';


    function create(recipe) {
        return requester.postJSON("/api/recipes", recipe);
    }
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
                localStorage.setItem(LOCAL_STORAGE_USERNAME_KEY, user.username);
                localStorage.setItem(LOCAL_STORAGE_AUTHKEY_KEY, user.authKey);
                return {
                    username: res.result.username
                };
            })
    }

    return {
        create: create,
        register: register
    }
}());
