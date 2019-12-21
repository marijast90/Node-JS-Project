let query = require("./query");

createJobHistory = async(req, res) => {
    try {
        await query.createJobHistoryQuery(req.body);
        res.status(200).send("New job history added");
    } catch (error) {
        res.status(500).send(error.message);
    }
}

updateJobHistory = async (req, res) => {
    try {
        await query.updateJobHistoryQuery(req.body.EndDate, req.params.jobhistoryId);
        res.status(200).send(`The job history changed`);

    } catch (error) {
     res.status(500).send(error.message);
    }
}

module.exports = {
    createJobHistory,
    updateJobHistory
}