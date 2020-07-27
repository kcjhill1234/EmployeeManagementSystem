const inquirer = require('inquirer');

// const menuChoices = [
//   {
//     name: 'View All Employees',
//     value: 'viewAllEmployees'
//   },
//   {
//     name: 'View All Employees By Manager',
//     value: 'viewAllEmployeesByManager'
//   },
//   {
//     name: 'View All Employees By Department',
//     value: 'viewAllEmployeesByDepartment'
//   },
//   {
//     name: 'Add Employee',
//     value: 'addEmployee'
//   },
//   {
//     name: 'Remove Employee',
//     value: 'removeEmployee'
//   },
//   {
//     name: 'Update Employee Role',
//     value: 'updateEmployeeRole'
//   },
//   {
//     name: 'Update Employee Manager',
//     value: 'updateEmployeeManager'
//   },
//   {
//     name: 'View All Roles',
//     value: 'viewAllRoles'
//   },
//   {
//     name: 'Add Role',
//     value: 'addRole'
//   },
//   {
//     name: 'Remove Role',
//     value: 'removeRole'
//   },
//   {
//     name: 'Exit',
//     value: 'exit'
//   }
// ]
// const questions = [
//   {
//     type: 'list',
//     name: 'menu',
//     message: 'What would you like to do?',
//     choices: menuChoices
//   },
// ]
function buildQuestions({ employees, roles, departments }) {
  let menuChoices = [
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
      name: 'RemoveEmployee',
      value: 'removeEmployee'
    },
    {
      name: 'UpdateEmployee Role',
      value: 'updateEmployeeRole'
    },
    {
      name: 'Update Employee Manager',
      value: 'updateEmployeeManager'
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
      name: 'View All Departments',
      value: 'viewAllDepartments'
    },
    {
      name: 'Add Departments',
      value: 'addDepartments'
    },
    {
      name: 'Remove Departments',
      value: 'removeDepartments'
    },
    {
      name: 'Exit',
      value: 'exit'
    },
  ]


if (departments.length === 0) {
  const choicesToRemove = [
    'addRole',
    'viewAllDepartments',
    'removeDepartment'
  ]
  menuChoices = menuChoices.filter(item => !choicesToRemove.includes(item.value))
}

if (roles.length === 0) {
  const choicesToRemove = [
    'addEmployee',
    'viewAllRoles',
    'removeRole',
  ]
  menuChoices = menuChoices.filter(item => !choicesToRemove.includes(item.value))

}

if (employees.length === 0) {
  const choicesToRemove = [
    'viewAllEmployees',
    'viewAllEmployeeByManager',
    'viewAllEmployeesByDepartment',
    'removeEmployee',
    'updateEmployeeManager',
    'updateEmployeeRole'
  ]
  menuChoices = menuChoices.filter(item => !choicesToRemove.includes(item.value))

}

const questions = [
  {
    type: 'list',
    name: 'menu',
    message: 'What would you like to do?',
    choices: menuChoices
  },
]
return questions
}
const MainMenu = (dependencies) => inquirer.prompt(buildQuestions(dependencies));

module.exports = MainMenu;