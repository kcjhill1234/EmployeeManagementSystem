
class Employee {

    constructor(orm){
        this.orm = orm;
    }

    getAll() {
        return this.orm.getAll('employee')
    }

    getAllByManager(){

    }

    getAllByDepartment() {

    }

    create() {

    }

    update() {

    }

    delete() {

    }
}

module.exports = Employee