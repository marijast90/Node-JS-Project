let conn = require("../database");

getAllWorksQuery = () => {
    let query = "SELECT * FROM working";
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

createWorkingQuery = (body) => {
    let query = "INSERT INTO working (Hours, ProjectId, AdminId, EmployeeId ) VALUES(?,?,?,?)"
    let newWork = [body.Hours, body.ProjectId, body.AdminId, body.EmployeeId];
    return new Promise((resolve, reject) => {
        conn.query(query, newWork, (error, results, fields) => {
            if (error) {
                reject(error)
            } else {
                resolve()
            };
        });
    });
};

updateWorkingQuery = (hours ,workingId) => {
    let query = "UPDATE working SET Hours = ? WHERE Id = ?";
    return new Promise((resolve, reject) => {
        conn.query(query, [hours,workingId], (error, results, fields) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        })
    })
};

employeeWorkingHoursQuery = (employeeId) => {
    let query = "SELECT * FROM working JOIN employee ON EmployeeId = employee.Id WHERE EmployeeId = ?";
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
module.exports = {getAllWorksQuery, createWorkingQuery, updateWorkingQuery, employeeWorkingHoursQuery};