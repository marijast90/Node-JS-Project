let express = require("express");
let router = express.Router();
let actions = require("./action");

router.post("/jobhistory", actions.createJobHistory);
router.patch("/jobhistory/:jobhistoryId", actions.updateJobHistory);
module.exports = router;