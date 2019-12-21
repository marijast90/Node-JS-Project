let conn = require("../database");

getAllDepartmentQuery = () => {
    let query = "SELECT * FROM department";
    return new Promise((resolve, reject) => {
        conn.query(query, (error, results, fields) => {
            if (error) {
                reject(error)
            } else {
                resolve(results);
            };
        });
    });
};

createDepartmentQuery = (body) => {
    let query = "INSERT INTO department (Name, Location, NumberOfEmployees,EmployeeId,AdminId) VALUES(?,?,?,?,?)"
    let newDepartment = [body.Name, body.Location, body.NumberOfEmployees, body.EmployeeId, body.AdminId];
    return new Promise((resolve, reject) => {
        conn.query(query, newDepartment, (error, results, fields) => {
            if (error) {
                reject(error)
            } else {
                resolve()
            };
        });
    });
};

updateDepartmentQuery = (numberOfEmployees,departmentId) => {
    let query = "UPDATE department SET NumberOfEmployees = ? WHERE Id = ?";
    return new Promise((resolve, reject) => {
        conn.query(query, [numberOfEmployees,departmentId], (error, results, fields) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        })
    })
};

deleteDepartmentQuery = (departmentId) => {
    let query = "DELETE FROM department WHERE Id = ?";
    return new Promise((resolve, reject) => {
        conn.query(query, [departmentId], (error, results, fields) => {
            if (error) {
                reject(error);
            } else {
                resolve();
            };
        });
    });
};


employeeJobHistoryBelongsToDepartmentQuery = (employeeId) => {
    let query = "SELECT * FROM jobhistory JOIN employee ON EmployeeId = employee.Id JOIN department ON DepartmentId = department.Id WHERE jobhistory.EmployeeId = ?";
    return new Promise((resolve, reject) => {
        conn.query(query, [employeeId], (error, results, fields) => {
            if (error) {
                reject(error)
            } else {
                resolve(results)
            }
        })
    })
}

module.exports = {
    getAllDepartmentQuery,
    createDepartmentQuery,
    updateDepartmentQuery,
    deleteDepartmentQuery,
    employeeJobHistoryBelongsToDepartmentQuery
};