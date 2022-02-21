const {Router} = require ('express');
const signInController = require('../controllers/signInController');
const isEmailValid = require('../middleware/isEmailValid');

const signInRouter = Router();

signInRouter.get('/', signInController.renderSignIn);

signInRouter.post('/',isEmailValid,  signInController.getSignedUser);

module.exports = signInRouter;