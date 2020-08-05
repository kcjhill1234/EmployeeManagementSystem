const inquirer = require("inquirer")

function buildQuestions({ employees, roles }) {
    const questions = [
        {
            type: 'input',
            name: 'first_name',
            message: 'What is the employees first name'
        },
        {
            type: 'input',
            name: 'last_name',
            message: 'What is the employees last name'
        },
        {
            type: 'list',
            name: 'role_id',
            message: 'What is the employees role',
            choices: roles.map(role => {
                return {
                    name: role.title,
                    value: role.id
                }
            })
            
        },
        {
            type: 'list',
            name: 'manager_id',
            message: 'Who is the employees manager?',
            choices: [{ name: 'None', value: 'null' }].concat(employees.map(employee => {
                return {
                    name: `${employee.first_name}, ${employee.last_name}`,
                    value: employee.id
                }
            }))

        },
    ]

    return questions
}

const NewEmployeePrompt = (dependencies) => inquirer.prompt(buildQuestions(dependencies));

module.exports = NewEmployeePrompt