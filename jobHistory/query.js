let conn = require("../database");

createJobHistoryQuery = (body) => {
    let query = "INSERT INTO jobHistory (StartDate,EndDate,EmployeeId,DepartmentId) VALUES(?,?,?,?)"
    let newJobHistory = [body.StartDate, body.EndDate, body.EmployeeId, body.DepartmentId];
    return new Promise((resolve, reject) => {
        conn.query(query, newJobHistory, (error, results, fields) => {
            if (error) {
                reject(error)
            } else {
                resolve()
            };
        });
    });
};

updateJobHistoryQuery = (date,jobhistoryId) => {
    let query = "UPDATE jobHistory SET EndDate=?  WHERE Id = ?";
    return new Promise((resolve, reject) => {
        conn.query(query, [date,jobhistoryId], (error, results, fields) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        })
    })
};

module.exports = {createJobHistoryQuery, updateJobHistoryQuery};