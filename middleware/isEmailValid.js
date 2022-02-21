const users = require('../db/users');

function isEmailValid (req, res, next) {
    try {
        const {email} = req.body;
        const userExist = users.find(user => user.email === email);

        if (!userExist) {
            throw new Error('Wrong email!')
        }

        req.user = userExist;

        next();
    } catch (err) {
        res.status(400).send(err.message);
    }
}

module.exports = isEmailValid;