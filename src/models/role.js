

class Role {
    constructor(orm){
        this.orm = orm
    }
    getAll(){
        return this.orm.getAll('role');
    }

    create({ title, salary, department_id }) {
        const columns = ['title', 'salary', 'department_id'];
        const values = [`'${title}'`, salary, department_id]
        return this.orm.create('role', columns , values )
    }

    update(role){
        return this.orm.update('role', role.id, role)
    }

    delete(id){
        return this.orm.delete('role', id)
    }
}

module.exports = Role