const inquirer = require("inquirer")
// const ORM = require('../services/orm');
// const orm = new ORM();
// const Employee = require('../models/employee');
// const employeeModel = new Employee(orm)

function buildQuestions({ employees}) {
    // const employees = await employeeModel.getAll()
    const questions = [
        
        {
            type: 'list',
            name: 'id',
            message: 'Which employee do you want to remove',
            choices: employees.map(employee => {
                    return {
                        name: `${employee.first_name}, ${employee.last_name}`,
                        value: employee.id
                    }
                }
            )
        }
    ]
    return questions
}

const RemoveEmployeePrompt = (dependencies) => inquirer.prompt(buildQuestions(dependencies))

module.exports = RemoveEmployeePrompt