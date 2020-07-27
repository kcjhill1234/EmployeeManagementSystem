const inquirer = require('inquirer');

function buildQuestions({ roles }) {
    const questions = [
        {
            type: 'list',
            name: 'id',
            message: 'Which role do you want to remove?',
            choices: roles.map(role => {
                return {
                    name: role.title,
                    value: role.id,
                }
            })
        },
    ]

    return questions
}

const RemoveRolePrompt = (dependencies) => inquirer.prompt(buildQuestions(dependencies));

module.exports = RemoveRolePrompt; 