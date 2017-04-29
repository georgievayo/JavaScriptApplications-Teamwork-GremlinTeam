const keyGenerator = require("../Utils/auth-key-generator");

module.exports = (db) => {
    return {
        getUsers: (req, res) => {
            let users = db.get("users")
                .value();
            res.send({ result: users });
        },
        register: (req, res) => {
            var user = req.body;
            user.usernameLower = user.data.username.toLowerCase();
            user.authKey = keyGenerator.generate(user.id);
            let foundUser = db.get('users').find({
                usernameLower: user.data.username.toLowerCase()
            }).value();
            if (foundUser !== undefined) {
                res.status(400)
                    .json('Username is already taken');
                return;
            }
            db.get('users')
                .push(user)
                .write();

            res.status(201)
                .json({
                    result: user
                });
        },
        login: (req, res) => {
            var user = req.body.data;
            console.log(user);
            var dbUser = db.get("users").find({
                usernameLower: user.username.toLowerCase()
            }).value();
            console.log(dbUser);

            if (dbUser.data.passHash !== user.passHash) {
                res.status(404)
                    .json("Username or password is invalid");
            }
            else {
                console.log("true");
                res.status(200)
                    .send({
                        result: {
                            username: dbUser.username,
                            authKey: dbUser.authKey
                        }
                    });
            }
        }
    }
};