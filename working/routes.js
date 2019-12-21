let express = require("express");
let router = express.Router();
let actions = require("./action");

router.get('/working', actions.getAllWorks);
router.post('/working', actions.createWorking);
router.patch('/working/:workingId', actions.updateWorking);
router.get('/working/hours/:employeeId', actions.employeeWorkingHours);

module.exports = router;