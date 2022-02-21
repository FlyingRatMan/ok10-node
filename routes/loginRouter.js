const {Router} = require ('express');
const loginController = require('../controllers/loginController');
const loginMiddleware = require('../middleware/isLoginValid');

const loginRouter = Router();

loginRouter.get('/', loginController.renderLoginPage);

loginRouter.post('/', loginMiddleware, loginController.postUserInDB);

module.exports = loginRouter;