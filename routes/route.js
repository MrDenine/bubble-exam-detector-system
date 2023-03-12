const express = require('express');
const router = express.Router();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

// require controller
const indexController = require('../controllers/indexController.js');
const exam_manageController = require('../controllers/exam_manageController');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
router.use(cookieParser());

// use router
router.get('/',indexController.render_indexPage);
router.get('/exam-manage',exam_manageController.render_manageExamPage);

router.post('/manage-addUser', exam_manageController.test);

module.exports = router; 