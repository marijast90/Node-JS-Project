let express = require("express");
let router = express.Router();
let actions = require("./action");

router.get('/department' , actions.getAllDepartment);
router.post('/department', actions.createDepartment);
router.get('/department/jobhistory/:employeeId', actions.employeeJobHistoryBelongsToDepartment);
router.patch('/department/employee/:departmentId', actions.updateDepartment);
module.exports = router;