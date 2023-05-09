const express = require('express');
const router = express.Router();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

// require controller
const indexController = require('../controllers/indexController.js');
const loginController = require('../controllers/loginController.js');
const userController = require('../controllers/userController.js');
const exam_manageController = require('../controllers/exam_manageController.js');
const show_scoreadminController = require('../controllers/show_scoreadminController.js');
const show_scorestuController = require('../controllers/show_scorestuController.js');
const re_stuController = require('../controllers/re_stuController.js');
const ansController = require('../controllers/ansController.js');
const ans2Controller = require('../controllers/ans2Controller.js');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
router.use(cookieParser());

// use router หน้าบ้าน
router.get('/login', loginController.render_loginPage);
router.get('/', indexController.render_indexPage);
router.get('/user', userController.render_userPage);
router.get('/exammanage', exam_manageController.render_manageExamPage);
router.get('/restu', re_stuController.render_re_stuPage);
router.get('/show_sadmin', show_scoreadminController.render_show_scoreadminPage);
router.get('/show_sstu', show_scorestuController.render_show_scorestuPage);
router.get('/ans', ansController.render_ansPage);
router.get('/ans2', ans2Controller.render_ans2Page);

// use router หลังบ้าน
router.post('/update_user',userController.updateUser);

module.exports = router; 