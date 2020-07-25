

class Role {
    constructor(orm){
        this.orm = orm
    }
    getAll(){
        return this.orm.getAll('role');
    }

    create({ title, salary, department_id }) {
        const columns = ['title', 'salary', 'department_id'];
        const values = [`'${title}'`, salary, department_id];
        return this.orm.create('role', columns , values )
    }

    update(id, column, value){
        return this.orm.update('role', id, column, value)
    }

    delete(id){
        return this.orm.delete('role', id)
    }
}

module.exports = Role