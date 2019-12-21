let query = require("./query");
let { Employee, Department, JobHistory } = require("../models");


getAllDepartment = async (req, res) => {
    try {
        let department = await query.getAllDepartmentQuery();
        res.status(200).send(department);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

createDepartment = async (req, res) => {
    try {
        await query.createDepartmentQuery(req.body);
        res.status(200).send("New Department Opened!");
    } catch (error) {
        res.status(500).send(error.message);
    }
}

updateDepartment = async (req, res) => {
    try {
        await query.updateDepartmentQuery(req.body.NumberOfEmployees, req.params.departmentId);
        res.status(200).send(`The department with id ${req.params.departmentId} has changed number of employees`);

    } catch (error) {
        res.status(500).send(error.message);
    }
}

deleteDepartment = async (req, res, next) => {
    try {
        await deleteDepartmentQuery(req.params.Id);
        res.status(200).send("This department is deleted!");
    } catch (error) {
        res.status(400).send(error.message);
    };
};

employeeJobHistoryBelongsToDepartment = async (req, res) => {
    try {
        let data = await query.employeeJobHistoryBelongsToDepartmentQuery(req.params.employeeId);
        let employee = new Employee(data[0].FirstName, data[0].SecondName, data[0].BirthDate, data[0].Salary);
        let previousJob = data.map(x => {
            return new JobHistory(x.StartDate, x.EndDate);
        });
        let worksInDepartment = data.map(element => {
            return new Department(element.Name, element.NumberOfEmployees);
        });

        employee.worksInDepartment = worksInDepartment;
        employee.previousJob = previousJob;
        res.status(200).send(employee);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = {
    getAllDepartment,
    createDepartment,
    updateDepartment,
    deleteDepartment,
    employeeJobHistoryBelongsToDepartment
};