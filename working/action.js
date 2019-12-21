let query = require("./query");

getAllWorks = async (req, res) => {
    try {
        let admins = await query.getAllWorksQuery();
        res.status(200).send(admins);
    } catch (error) {
        res.status(500).send(error.message);
    }
}


createWorking = async (req, res) => {
    try {
        await query.createWorkingQuery(req.body);
        res.status(200).send("New work added!");
    } catch (error) {
        res.status(500).send(error.message);
    }
}


updateWorking = async (req, res) => {
    try {
        await query.updateWorkingQuery(req.body.Hours, req.params.workingId);
        res.status(200).send(`Hours working updated!`);
    } catch (error) {
     res.status(500).send(error.message);
    }
}

employeeWorkingHours = async (req, res) => {
    try {
        let data = await query.employeeWorkingHoursQuery(req.params.employeeId);
        res.status(200).send(data[0]);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = {getAllWorks, createWorking, updateWorking, employeeWorkingHours};