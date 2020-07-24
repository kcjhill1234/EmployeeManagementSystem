#! /usr/bin/env node
const DepartmentModel = require('./models/department');
const connection = require('./services/connection');
const ORM = require('./services/orm');
const orm = new ORM();
const Employee = require('./models/employee');


const department = new DepartmentModel(orm);
const employee = new Employee(orm);
department.getAll('2').then(results => {
    console.log(results)
    connection.end()
}).catch(error => {
    console.error(error)
    connection.end();
})

//console.log("we are step up")
