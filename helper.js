
const Joi = require("joi");
function hasNumber(myString) {
    return /\d/.test(myString);
};

usernameValidator = (req, res, next) => {
    let username = req.body.Username;
    if (!hasNumber(username)) {
        let error = new Error("Username must contain at least one number");
        error.status = 416;
        next(error);
    }
    next();
};


validateInfo = (req, res, next) => {
    const data = req.body;
    const schema = Joi.object().keys({
        Name: Joi.string().min(3).required(),
        Username: Joi.string().trim().min(4).required(),
        Password: Joi.string().min(5).max(12).required()
    });
    Joi.validate(data, schema, (err, value) => {
        if (err) {
            var error = new Error("Invalid Request Data");
            error.status = 422;
            next(error);
        } else {
            next();
        }
    });

};


module.exports = {
    validateInfo,
    usernameValidator
};