const users = require('../db/users');

module.exports = {
    renderLoginPage: (req, res) => {
        res.render('login');
    },
    postUserInDB: ({body}, res) => {
        const userExist = users.some(user => user.email === body.email);
        if (userExist) {
            res.redirect('/error');
            return;
        }

        users.push({...body, id: users.length? users.length + 1 : 1});
        res.redirect('/users');
    },
}