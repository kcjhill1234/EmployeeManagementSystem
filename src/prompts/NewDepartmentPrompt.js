const inquirer = require('inquirer');

function buildQuestions() {
  const questions = [
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of the department?'
    }
  ]
  return questions
}

const NewDepartmentPrompt = (dependencies) => inquirer.prompt(buildQuestions(dependencies));

module.exports = NewDepartmentPrompt;