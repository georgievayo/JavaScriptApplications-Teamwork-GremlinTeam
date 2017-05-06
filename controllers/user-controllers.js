const keyGenerator = require("../Utils/auth-key-generator");
const idGenerator = require("../Utils/id-generator");

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
            let user = req.body.data;
            let dbUser = db.get("users").find({
                usernameLower: user.username.toLowerCase()
            }).value();

            if (!dbUser || dbUser.data.passHash !== user.passHash) {
                res.send("Username or password is invalid")
                .status(404);
            }
            else {
                let id = idGenerator();
                let authKey = keyGenerator.generate(id);
                console.log(authKey);
                db.get("currentUser")
                .push(authKey)
                .write();

                res.status(200)
                    .send({
                        result: {
                            username: dbUser.data.username,
                            authKey: authKey
                        }
                    });
            }
        },
        logout: (req, res) => {
            db.get("currentUser")
                .pop()
                .write();
                res.status(200);
        },
        hasLoggedUser: (req, res) => {
            let users = db.get("currentUser").value();
            res.send({count: users.length});
        }
    }
};