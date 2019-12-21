CREATE TABLE IF NOT EXISTS admin(
Id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
Name VARCHAR(20) NOT NULL,
Username VARCHAR(20) NOT NULL,
Password VARCHAR(200) NOT NULL
);

CREATE TABLE IF NOT EXISTS employee(
Id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
FirstName VARCHAR(20) NOT NULL,
SecondName VARCHAR(20) NOT NULL,
BirthDate INT NOT NULL,
Address VARCHAR(100) NOT NULL,
Salary INT NOT NULL,
Sex VARCHAR(20) NOT NULL,
AdminId INT NOT NULL,
FOREIGN KEY (AdminId) REFERENCES admin(Id)
);

CREATE TABLE IF NOT EXISTS department(
Id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
Name VARCHAR(20) NOT NULL,
Location VARCHAR(20) NOT NULL,
NumberOfEmployees INT NOT NULL,
EmployeeId INT NOT NULL,
AdminId INT NOT NULL,
FOREIGN KEY (EmployeeId) REFERENCES employee(Id),
FOREIGN KEY (AdminId) REFERENCES admin(Id)
);

CREATE TABLE IF NOT EXISTS working(
Id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
Hours time,
ProjectId INT NOT NULL,
AdminId INT NOT NULL,
EmployeeId INT NOT NULL,
FOREIGN KEY (ProjectId) REFERENCES project(Id),
FOREIGN KEY (AdminId) REFERENCES admin(Id),
FOREIGN KEY (EmployeeId) REFERENCES employee(Id)
);

CREATE TABLE IF NOT EXISTS project(
Id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
ProjectName VARCHAR(50) NOT NULL,
Location VARCHAR(50) NOT NULL,
AdminId INT NOT NULL,
FOREIGN KEY (AdminId) REFERENCES admin(Id)
);

CREATE TABLE IF NOT EXISTS jobHistory(
Id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
StartDate VARCHAR(50) NOT NULL,
EndDate VARCHAR(50) NOT NULL,
EmployeeId INT NOT NULL,
DepartmentId INT NOT NULL,
FOREIGN KEY (EmployeeId) REFERENCES employee(Id),
FOREIGN KEY (DepartmentId) REFERENCES department(Id)
);
SELECT * FROM department;
INSERT INTO working (Hours, ProjectId,  AdminId, EmployeeId)
VALUES("8", 1, 1, 1);
SELECT * FROM jobhistory;
SELECT * FROM working;
SELECT * FROM employee;
SELECT * FROM employee JOIN admin ON AdminId = admin.Id WHERE employee.Id = 1;

SELECT * FROM jobhistory JOIN employee ON EmployeeId = employee.Id JOIN department ON DepartmentId = department.Id WHERE jobhistory.EmployeeId = 1;
INSERT INTO project (ProjectName , Location , AdminId)
VALUES ("Hacking Nasa" , "Dracevo" , 1);
SELECT * FROM admin;
DELETE FROM admin WHERE Id  =3;

SELECT * FROM working JOIN employee ON EmployeeId  = employee.Id JOIN project ON ProjectId = project.Id WHERE EmployeeId = 1;
SELECT * FROM department JOIN employee ON EmployeeId = employee.Id WHERE EmployeeId = 1;
SELECT * FROM working JOIN employee ON EmployeeId = employee.Id WHERE EmployeeId = 1;



 ADD DEPARTMENT
{
	"Name": "Production",
	"Location": "Skopje",
	"NumberOfEmployees": 30,
	"EmployeeId": 1,
	"AdminId": 1
}


ADD Employee
{
	"FirstName": "Marija",
	"SecondName": "Stojkoska",
	"BirthDate": "01.04",
	"Address": "Aerodrom, Skopje",
	"Salary": 44000,
	"Sex": "female",
	"AdminId": 1
}

ADD Working
{
	"Hours": " 30:00:00",
	"ProjectId": 2,
	"AdminId": 1,
	"EmployeeId": 1
}