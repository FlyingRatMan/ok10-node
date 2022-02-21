const users = require("../db/users");

module.exports = {
    getUsers: ({query}, res) => {
        if (query) {
            const filteredUsers = [...users];
            if (query.city) {
                filteredUsers.filter(user => user.city === query.city);
            }
            if (query.age) {
                filteredUsers.filter(user => user.age === query.age);
            }

            res.render('users', {users: filteredUsers});
        }

        res.render('users', {users});
    },
    getUserByID: ({params}, res) => {
        const {id} = params;
        let user = users.find(user => user.id === +id);
        if (!user) {
            res.render('error');
        }

        res.render('user', {user: user});
    },
    deleteUserByID: ({body, query}, res) => {
        if (query.method === 'delete') {
            users.splice(users[body.id], 1);
        }

        res.redirect('/users');
    },
};
