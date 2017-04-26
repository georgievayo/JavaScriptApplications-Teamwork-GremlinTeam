const chars = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM!@#$%^&*()_+-=',
  length = 60;

let authKeyGenerator = {
    generate: function (id) {
        console.log(id);
        var authKey = '';
        authKey += id;
        while (authKey.length < length) {
            var index = (Math.random() * chars.length) | 0;
            authKey += chars[index];
        }
        return authKey;
    }
};

module.exports = authKeyGenerator;