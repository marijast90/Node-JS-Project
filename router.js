let express = require("express");
let router = express.Router();
let empRoutes = require("./employee/routes");
let admRoutes = require("./admin/routes");
let depRoutes = require("./department/routes");
let workRoutes = require("./working/routes");
let jobRoutes = require("./jobhistory/routes");
router.use(empRoutes);
router.use(admRoutes);
router.use(depRoutes);
router.use(workRoutes);
router.use(jobRoutes);
module.exports = router;