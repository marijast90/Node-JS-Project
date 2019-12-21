class Admin {
    constructor(name, username) {
        this.name = name;
        this.username = username;
    }
}

class Employee {
    constructor(firstName,secondName,birthDate,salary, sex) {
        this.firstName = firstName;
        this.secondName = secondName;
        this.birthDate = birthDate;
        this.salary = salary;
        this.sex = sex;
    }
};

class Department {
    constructor(name, numberOfEmployees){
        this.name = name;
        this.numberOfEmployees = numberOfEmployees;
    }
};

class JobHistory {
    constructor(startDate, endDate){
        this.startDate = startDate;
        this.endDate = endDate;
    }
}

class Working {
    constructor(hours){
        this.hours = hours;
    }
}

class Project {
    constructor(projectName, location){
        this.projectName = projectName;
        this.location = location;
    }
}
module.exports = {
    Admin,
    Employee,
    Department,
    JobHistory,
    Project,
    Working
}