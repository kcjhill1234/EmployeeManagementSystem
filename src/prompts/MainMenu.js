const inquirer = require('inquirer');

const menuChoices = [
  {
    name: 'View All Employees',
    value: 'viewAllEmployees'
  },
  {
    name: 'View All Employees By Manager',
    value: 'viewAllEmployeesByManager'
  },
  {
    name: 'View All Employees By Department',
    value: 'viewAllEmployeesByDepartment'
  },
  {
    name: 'Add Employee',
    value: 'addEmployee'
  },
  {
    name: 'Remove Employee',
    value: 'removeEmployee'
  },
  {
    name: 'Update Employee Role',
    value: 'updateEmployeeRole'
  },
  {
    name: 'Update Employee Manager',
    value: 'updateEmployeeManager'
  },
  {
    name: 'View All Roles',
    value: 'viewAllRoles'
  },
  {
    name: 'Add Role',
    value: 'addRole'
  },
  {
    name: 'Remove Role',
    value: 'removeRole'
  },
  {
    name: 'Exit',
    value: 'exit'
  }
]
const questions = [
  {
    type: 'list',
    name: 'menu',
    message: 'What would you like to do?',
    choices: menuChoices
  },
]


const MainMenu = () => inquirer.prompt(questions);

module.exports = MainMenu