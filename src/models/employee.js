
class Employee {
    constructor(orm) {
        this.orm = orm;
    }

    getAll() {
        return this.orm.getAll('employee')
    }

    getAllByManager(managerId) {
        return this.orm.getAllByGroup('employee', `manager_id = ${managerId}`);
    }

    getAllByDepartment(departmentId) {
        return this.orm.query(`
        SELECT e.* FROM employee e 
        JOIN role r on e.role_id = r.id
        WHERE r.department_id = ${departmentId}`);
    }

    create({ first_name, last_name, role_id, manager_id }) {
        
        const columns = ['first_name', 'last_name', 'role_id', 'manager_id'];
        const values = [`'${first_name}'`, `'${last_name}'`, role_id, manager_id];

        return this.orm.create('employee', columns, values)
    }

    update(employee) {
        return this.orm.update('employee', employee.id, employee)
    }

    delete(id) {
        return this.orm.delete('employee', id)
    }
}
            
module.exports = Employee