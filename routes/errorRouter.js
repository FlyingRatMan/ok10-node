const {Router} = require ('express');
const users = require('../db/users');

const errorRouter = Router();

errorRouter.get('/', (req, res) => {
    res.render('error');
})

module.exports = errorRouter;