const express = require('express');
const router = express.Router();
const cookieParser = require('cookie-parser');

// require controller
const indexController = require('../controllers/indexController');
const loginController = require('../controllers/loginController');
const userController = require('../controllers/userController');
const exam_manageController = require('../controllers/exam_manageController');
const re_stuController = require('../controllers/re_stuController');
const show_scoreadminController = require('../controllers/show_scoreadminController');
const show_scorestuController = require('../controllers/show_scorestuController');
const ansController = require('../controllers/ansController');
const ans2Controller = require('../controllers/ans2Controller');
const omrController = require('../controllers/omrController');

router.use(express.json());
router.use(express.urlencoded({ extended: false }));
router.use(cookieParser());

const checkAuth = (req, res, next) => {
    if (req.cookies.loggedIn === 'true') {
        next();
    } else {
        res.redirect('/login');
    }
};

// use router หน้าบ้าน
router.get('/login', loginController.render_loginPage);
router.get('/', checkAuth, indexController.render_indexPage);
router.get('/user', checkAuth, userController.render_userPage);
router.get('/exammanage', checkAuth, exam_manageController.render_manageExamPage);
router.get('/restu', checkAuth, re_stuController.render_re_stuPage);
router.get('/show_sadmin', checkAuth, show_scoreadminController.render_show_scoreadminPage);
router.get('/show_sstu', checkAuth, show_scorestuController.render_show_scorestuPage);
router.get('/ans', checkAuth, ansController.render_ansPage);
router.get('/ans2', checkAuth, ans2Controller.render_ans2Page);

// use router หลังบ้าน
router.post('/update_user', userController.updateUser);
router.post('/insert_user', userController.insertUser);
router.post('/add_user', userController.addUser);
router.post('/del_user/:username', userController.delUser);
router.post('/login1', loginController.handleLogin);
router.post('/exam_manage', exam_manageController.insertData);

router.get('/getAnswer', omrController.getAnswer);
router.get('/logout', indexController.handleLogout);

module.exports = router;