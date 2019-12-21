let query = require("./query");
let Joi = require("@hapi/joi");
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
let { Admin, Employee } = require("../models");

getAllAdmins = async (req, res) => {
    try {
        let admins = await query.getAllAdminsQuery();
        res.status(200).send(admins);
    } catch (error) {
        res.status(500).send(error.message);
    }
}


loginAdmin = async (req, res) => {
    var username = req.body.Username;
    var pass = req.body.Password;

    try {
        var data = await getAdminByUsernameQuery(username);
        var dbAdmin = data[0];
        const matchPass = bcrypt.compareSync(pass, dbAdmin.Password);
        if (matchPass) {
            var token = jwt.sign({ dbAdmin }, 'marija', { expiresIn: '5h' });
            res.status(200).send(token);
        }
        else {
            res.status(401).send("Wrong password!");
        }
    } catch (error) {
        res.status(500).send(error);
    }
};

createAdmin = async (req, res) => {
    try {
        let adminRequest = req.body;
        let data = await query.getAdminByUsernameQuery(req.body.Username);
        const passHash = bcrypt.hashSync(adminRequest.Password, 10);
        let admin = data[0];
        if (admin === undefined) {
            await query.createAdminQuery(req.body, passHash);
            res.status(200).send("Admin Added!")
        } else {
            res.send("Username already exists!");
        }
    } catch (error) {
        res.status(500).send(error.message);
    };
};


adminAddedThisEmployee = async (req, res) => {
    // employeeId = req.params.employeeId;
    try {
        let data = await query.adminAddedThisEmployeeQuery(req.params.employeeId);
        // let db = data[0];
        let employee = new Employee(data[0].FirstName, data[0].SecondName, data[0].BirthDate);
        let addedByAdmin = data.map(element => {
            return new Admin(element.Name, element.Username);
        });
        employee.addedByAdmin = addedByAdmin;
        res.status(200).send(employee);
    } catch (error) {
        res.status(500).send(error.message);
    }
}


module.exports = {
    getAllAdmins,
    createAdmin,
    loginAdmin,
    adminAddedThisEmployee
}; 