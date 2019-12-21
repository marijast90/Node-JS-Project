let express = require("express");
let router = express.Router();
let helper = require("../helper");
let actions = require("./action");

router.get('/admin' , actions.getAllAdmins);
router.post('/admin',helper.validateInfo ,helper.usernameValidator, actions.createAdmin);
router.post('/login', actions.loginAdmin);
router.get('/admin/project/:employeeId', actions.adminAddedThisEmployee);
module.exports = router;