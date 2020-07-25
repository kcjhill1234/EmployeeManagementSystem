const inquirer = require('inquirer');

function buildQuestions({ departments }) {
  const questions = [
    {
      type: 'list',
      name: 'id',
      message: 'Select a department to see employees',
      choices: departments.map(department => {
        return {
          name: department.name,
          value: department.id,
        }
      })
    },
  ]

  return questions
}

const ChooseDepartmentPrompt = (dependencies) => inquirer.prompt(buildQuestions(dependencies));

module.exports = ChooseDepartmentPrompt;