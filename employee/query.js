let conn = require("../database");

getAllEmployeesQuery = () => {
    let query = "SELECT * FROM employee";
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

getSpecificEmployeeQuery = (employeeId) => {
    let query = 'SELECT * FROM employee WHERE Id = ?';
    return new Promise((resolve, reject) => {
        conn.query(query, [employeeId], (error, results, fields) => {
            if (error) {
                reject(error);
            } else {
                resolve(results)
            }
        });
    });
};

updateEmployeeQuery = (body, employeeId) => {
    let query = "UPDATE employee SET FirstName =?, SecondName =?, BirthDate =?, Address =?, Salary =?, Sex =?, AdminId =? WHERE Id = ?";
    let updateData = [body.FirstName, body.SecondName, body.BirthDate, body.Address, body.Salary, body.Sex, body.AdminId, employeeId];
    return new Promise((resolve, reject) => {
        conn.query(query, updateData, (error, results, fields) => {
            if (error) {
                reject(error);
            } else {
                resolve();
            };
        });
    });
};

deleteEmployeeQuery = (employeeId) => {
    let query = "DELETE FROM employee WHERE Id = ?";
    return new Promise((resolve, reject) => {
        conn.query(query, [employeeId], (error, results, fields) => {
            if (error) {
                reject(error);
            } else {
                resolve();
            };
        });
    });
};

createEmployeeQuery = (body) => {
    let query = "INSERT INTO employee (FirstName, SecondName,BirthDate,Address,Salary,Sex,AdminId) VALUES(?,?,?,?,?,?,?)"
    let newEmployee = [body.FirstName, body.SecondName, body.BirthDate, body.Address, body.Salary, body.Sex, body.AdminId];
    return new Promise((resolve, reject) => {
        conn.query(query, newEmployee, (error, results, fields) => {
            if (error) {
                reject(error)
            } else {
                resolve()
            };
        });
    });
};

employeeWorkingOnProjectQuery = (employeeId) => {
    let query = "SELECT * FROM working JOIN employee ON EmployeeId  = employee.Id JOIN project ON ProjectId = project.Id WHERE EmployeeId = ?";
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

employeeBelongsToDepartmentQuery = (employeeId) => {
    let query = "SELECT * FROM department JOIN employee ON EmployeeId = employee.Id WHERE EmployeeId = ?";
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
    getAllEmployeesQuery,
    getSpecificEmployeeQuery,
    updateEmployeeQuery,
    deleteEmployeeQuery,
    createEmployeeQuery,
    employeeWorkingOnProjectQuery,
    employeeBelongsToDepartmentQuery
};