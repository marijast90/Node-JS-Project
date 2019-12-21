let conn = require("../database");

getAllAdminsQuery = () => {
    let query = "SELECT * FROM admin";
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

createAdminQuery = (body, pass) => {
    let query = "INSERT INTO admin (Name, Username, Password) VALUES(?,?,?)"
    let newAdmin = [body.Name, body.Username, pass];
    return new Promise((resolve, reject) => {
        conn.query(query, newAdmin, (error, results, fields) => {
            if (error) {
                reject(error)
            } else {
                resolve()
            };
        });
    });
};



getAdminByUsernameQuery = (username) => {
    let query = "SELECT * FROM admin WHERE Username = ?";
    return new Promise((resolve, reject) => {
        conn.query(query, [username], (error, results, fields) => {
            if (error) {
                reject(error)
            } else {
                resolve(results)
            };
        });
    });

}

adminAddedThisEmployeeQuery = (employeeId) => {
    let query = "SELECT * FROM employee JOIN admin ON AdminId = admin.Id WHERE employee.Id = ?";
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
    getAllAdminsQuery,
    createAdminQuery,
    getAdminByUsernameQuery,
    adminAddedThisEmployeeQuery
};