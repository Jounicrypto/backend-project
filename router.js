const express = require('express');
const controller = require('./controllers/controller');

const router = express.Router();

router.get('/',controller.userLoggedin, controller.getLogIn);
router.get('/login',controller.userLoggedin, controller.getLogIn);
router.post('/login',controller.userLoggedin,controller.postLogIn);
router.post('/logout', controller.logOut);
router.get('/register', controller.getRegister);
router.post('/register', controller.postRegister);
router.get('/posts',controller.isAuth,controller.getHomePage);
router.get('/feed',controller.isAuth ,controller.getNewArticle);
router.post('/message', controller.postMedia);
router.post('/message/del/:id', controller.delComment);
router.get('/message/edit/:id',controller.isAuth, controller.getEditMessage);
router.post('/message/edit/:id', controller.postEditMessage);
router.get('/questions', controller.getQuestions);
router.post('/postQuestion', controller.postQuestion);

module.exports = router;