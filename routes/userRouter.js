const {Router} = require('express');
const userController = require('../controllers/userController');

const userRouter = Router();


userRouter.get('/', userController.getUsers);

userRouter.get('/:id', userController.getUserByID);

userRouter.post('/:id', userController.deleteUserByID);

module.exports = userRouter;