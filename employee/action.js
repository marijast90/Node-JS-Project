let query = require("./query");
let { Employee, Working, Project } = require("../models");

getAllEmployees = async (req, res) => {
    try {
        let employees = await query.getAllEmployeesQuery();
        res.status(200).send(employees);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

getSpecificEmployee = async (req, res, next) => {
    const employeeId = req.params.id;

    if (employeeId <= 0) {
        var error = new Error("Id must be larger than null!");
        error.status = 401;
        next(error);
    }

    try {
        const data = await getSpecificEmployeeQuery(employeeId);
        res.status(200).send(data[0]);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

createEmployee = async (req, res) => {
    try {
        await query.createEmployeeQuery(req.body);
        res.status(200).send("Employee Added!");
    } catch (error) {
        res.status(500).send(error.message);
    }
}

updateEmployee = async (req, res, next) => {
    try {
        await updateEmployeeQuery(req.body, req.params.id);
        res.status(200).send("Employee Updated!");
    } catch (error) {
        res.status(500).send(error.message)
    };
};

deleteEmployee = async (req, res, next) => {
    try {
        await deleteEmployeeQuery(req.params.id);
        res.status(200).send("Employee Deleted!");
    } catch (error) {
        res.status(400).send(error.message);
    };
};


employeeWorkingOnProject = async (req, res) => {
    try {
        let data = await query.employeeWorkingOnProjectQuery(req.params.employeeId);
        let employee = new Employee(data[0].FirstName, data[0].SecondName, data[0].BirthDate, data[0].Salary, data[0].Sex);
        let hoursWork = data.map(x => {
            return new Working(x.Hours);
        });
        let workOnProject = data.map(element => {
            return new Project(element.ProjectName, element.Location);
        });
        employee.hoursWork = hoursWork;
        employee.workOnProject = workOnProject;
        res.status(200).send(employee);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

employeeBelongsToDepartment = async (req, res) => {
    try {
        let data = await query.employeeBelongsToDepartmentQuery(req.params.employeeId);
        res.status(200).send(data[0]);
    } catch (error) {
        res.status(500).send(error.message);
    }
}


module.exports = {
    getAllEmployees,
    getSpecificEmployee,
    updateEmployee,
    deleteEmployee,
    createEmployee,
    employeeWorkingOnProject,
    employeeBelongsToDepartment
};