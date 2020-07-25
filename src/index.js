#! /usr/bin/env node
const figlet = require('figlet');
const cTable = require('console.table');
const ORM = require('./services/orm');
const Role = require('./models/role');
const Employee = require('./models/employee');
const Department = require('./models/department')
const MainMenu = require('./prompts/MainMenu');
const NewRolePrompt = require('./prompts/NewRolePrompt');
const RemoveRolePrompt = require('./prompts/RemoveRolePrompt');
const NewEmployeePrompt = require('./prompts/NewEmployeePrompt');
const NewDepartmentPrompt = require('./prompts/NewDepartmentPrompt');
const ChooseManagerPrompt = require('./prompts/ChooseManagerPrompt');
const RemoveEmployeePrompt = require('./prompts/RemoveEmployeePrompt');
const ChooseDepartmentPrompt = require('./prompts/ChooseDepartmentPrompt');
const RemoveDepartmentPrompt = require('./prompts/RemoveDepartmentPrompt');
const UpdateEmployeeRolePrompt = require('./prompts/UpdateEmployeeRolePrompt');
const UpdateEmployeeManagerPrompt = require('./prompts/UpdateEmployeeManagerPrompt');

const orm = new ORM();
const employeeModel = new Employee(orm);
const departmentModel = new Department(orm);
const roleModel = new Role(orm);

async function main() {
    //console.log(figlet.fontsSync());
    console.log(figlet.textSync('Employee Manager', {
        font: 'Star Wars',
        horizontalLayout: 'default',
        verticalLayout: 'default',
        width: 125,
        whitespaceBreak: true
    }));

    let menuSelection = {};
    while (menuSelection.menu !== 'exit') {

        const employees = await employeeModel.getAll();
        const departments = await departmentModel.getAll();
        const roles = await roleModel.getAll();

        const promptDependencies = {
            employees,
            departments,
            roles,
        }

        menuSelection = await MainMenu(promptDependencies);
        switch (menuSelection.menu) {
            case 'viewAllEmployees':
                console.table(employees)
                break;
            case 'viewAllEmployeesByManager':
                const manager = await ChooseManagerPrompt(promptDependencies);
                console.table(await employeeModel.getAllByManager(manager.id))
                break;
            case 'viewAllEmployeesByDepartment':
                const department = await ChooseDepartmentPrompt(promptDependencies);
                console.table(await employeeModel.getAllByDepartment(department.id))
                break;
            case 'addEmployee':
                const newEmployee = await NewEmployeePrompt(promptDependencies)
                //console.log(newEmployee);
                await employeeModel.create(newEmployee);
                break;
            case 'removeEmployee':
                const employeeToRemove = await RemoveEmployeePrompt(promptDependencies)
                await employeeModel.delete(employeeToRemove.id);
                break;
            case 'updateEmployeeRole':
                const updatedRole = await UpdateEmployeeRolePrompt(promptDependencies)
                await employeeModel.update(updatedRole.employee_id, 'role_id', updatedRole.role_id)
                break;
            case 'updateEmployeeManager':
                const updatedManager = await UpdateEmployeeManagerPrompt(promptDependencies)
                await employeeModel.update(updatedManager.employee_id, 'manager_id', updatedManager.manager_id)
                break;
            case 'viewAllRoles':
                console.table(roles)
                break;
            case 'addRole':
                const newRole = await NewRolePrompt(promptDependencies)
                await roleModel.create(newRole);
                break;
            case 'removeRole':
                const roleToRemove = await RemoveRolePrompt(promptDependencies)
                await roleModel.delete(roleToRemove.id)
                break;
            case 'viewAllDepartments':
                console.table(departments)
                break;
            case 'addDepartment':
                const newDepartment = await NewDepartmentPrompt(promptDependencies)
                await departmentModel.create(newDepartment.name);
                break;
            case 'removeDepartment':
                const departmentToRemove = await RemoveDepartmentPrompt(promptDependencies)
                await departmentModel.delete(departmentToRemove.id)
                break;
        }
    }
}
main()
//console.log("we are step up")

