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
            let foundUser = db.get("users").find({
                usernameLower: user.data.username.toLowerCase()
            }).value();
            if (foundUser !== undefined) {
                res.send("Username is already taken")
                    .status(400);
                return;
            }
            db.get("users")
                .push(user)
                .write();

            res.send({
                result: user
            }).status(201);
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
                db.get("currentUser")
                    .push({ username: user.username, authKey: authKey })
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
        getLoggedUser: (req, res) => {
            let user = db.get("currentUser").value();
            res.send({ result: user });
        },
        hasLoggedUser: (req, res) => {
            let user = req.body;
            let users = db.get("currentUser")
                .find(user)
                .value();
            res.send({ result: users });
        }
    }
};