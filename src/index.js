#! /usr/bin/env node
const cTable = require('console.table')
const DepartmentModel = require('./models/department');
const connection = require('./services/connection');
const ORM = require('./services/orm');
const orm = new ORM();
const Employee = require('./models/employee');
const Role = require('./models/role')
const MainMenu = require('./prompts/MainMenu');
const NewEmployeePrompt = require('./prompts/NewEmployeePrompt');
const RemoveEmployeePrompt = require('./prompts/RemoveEmployeePrompt');
const department = new DepartmentModel(orm);
const employee = new Employee(orm);
const role = new Role(orm);
// employee.getAll({first_name: 'Jim', last_name: 'Hill', role_id: 4,  manager_id: -1}).then(results => {
//     console.log(results)
//     connection.end()
// }).catch(error => {
//     console.error(error)
//     connection.end();
// })
MainMenu().then(async answers => {
    switch (answers.menu) {
        case 'viewAllEmployees':
            const employees = await employee.getAll()
            console.table(employees)
            break;
        case 'addEmployee':
            const newEmployee = await NewEmployeePrompt()
            // console.log(newEmployee)
            await employee.create(newEmployee)
            break;
        case 'removeEmployee':
            const answer = await RemoveEmployeePrompt()
            await employee.delete(answer.id)

    }
})

//console.log("we are step up")

