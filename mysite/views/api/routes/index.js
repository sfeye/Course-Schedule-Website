// File: api/routes/index.js

var express = require('express');
var router = express.Router();

var classesController = require('../controllers/classes');

router.get('/', classesController.index);
router.get('/classes', classesController.listClasses);
router.get('/newclass', classesController.addClass);
router.get('/delete', classesController.deleteClass);
router.get('/classinfo', classesController.viewAllClassInfo);
router.get('/schedule', classesController.viewSchedule);


module.exports = router;