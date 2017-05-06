let dataService = (function () {
    const SESSION_STORAGE_USERNAME_KEY = 'signed-in-user-username',
        SESSION_STORAGE_AUTHKEY_KEY = 'signed-in-user-auth-key';

    function create(recipe) {
        var options = {
            data: recipe,
            headers: {
                'x-auth-key': sessionStorage.getItem(SESSION_STORAGE_AUTHKEY_KEY)
            }
        };
        return requester.postJSON("/api/recipes", options);
    };

    function register(user) {
        let reqUser = {
            username: user.username,
            passHash: CryptoJS.SHA1(user.username + user.password).toString()
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
                if (res === "Username or password is invalid") {
                    return null;
                }

                let user = res.result;
                sessionStorage.setItem(SESSION_STORAGE_USERNAME_KEY, user.username);
                sessionStorage.setItem(SESSION_STORAGE_AUTHKEY_KEY, user.authKey);
                return user;
            });
    };

    function logout() {
        requester.postJSON("/api/users/logout");
        sessionStorage.removeItem("signed-in-user-username");
        sessionStorage.removeItem("signed-in-user-auth-key");
    }

    function hasLoggedUser() {
        return requester.getJSON("/api/hasUser")
        .then((data) => {
            let count = data.count;
            if(count === 0){
                return false;
            }
            else{
                return true;
            }
        })
    }

    return {
        create,
        register,
        login,
        logout,
        hasLoggedUser
    };
}());

if (typeof module !== 'undefined') {
  module.exports = (function(){ 
    return [
      dataService
    ]; 
  })();
}