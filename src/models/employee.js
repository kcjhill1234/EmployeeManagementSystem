
class Employee {
    constructor(orm) {
        this.orm = orm;
    }

    getAll() {
        return this.orm.query(`
        select 
        e.id,
        e.first_name,
        e.last_name,
        r.title,
        d.name as department,
        r.salary,
        concat(m.first_name, " ", m.last_name) as manager
        from employee e 
        left join employee m on e.manager_id = m.id
        join role r on e.role_id = r.id
        join department d on r.department_id = d.id`)
    }

    getAllByManager(managerId) {
        return this.orm.query(`select 
        e.id,
        e.first_name,
        e.last_name,
        r.title,
        d.name as department,
        r.salary,
        concat(m.first_name, " ", m.last_name) as manager
        from employee e 
        left join employee m on e.manager_id = m.id
        join role r on e.role_id = r.id
        join department d on r.department_id = d.id
        where e.manager_id =${managerId}
        `);
    }

    getAllByDepartment(departmentId) {
        return this.orm.query(`
        select 
        e.id,
        e.first_name,
        e.last_name,
        r.title,
        d.name as department,
        r.salary,
        concat(m.first_name, " ", m.last_name) as manager
        from employee e 
        left join employee m on e.manager_id = m.id
        join role r on e.role_id = r.id
        join department d on r.department_id = d.id
        where r.department_id = ${departmentId}`);
    }

    create({ first_name, last_name, role_id, manager_id }) {
        
        const columns = ['first_name', 'last_name', 'role_id', 'manager_id'];
        const values = [`'${first_name}'`, `'${last_name}'`, role_id, manager_id];

        return this.orm.create('employee', columns, values)
    }

    update(id, column, value) {
        return this.orm.update('employee', id, column, value)
    }

    delete(id) {
        return this.orm.delete('employee', id)
    }
}
            
module.exports = Employee