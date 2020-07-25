const connection = require("./connection.js");

const database = (queryString) => new Promise((resolve, reject) => {
    connection.query(queryString, (err, results)=>{
        if(err){
            reject(err)
        }
        resolve(results);
    })
});

const objToSql = (data) => {
    return Object.entries(data).map(entry => {
        return `${entry[0]} = ${entry[1]}`
    }).join();
}

class orm {
    constructor(){}
    getAll(table) {
        return database(`SELECT * FROM ${table}`)
    }

    getAllByGroup(table, condition){
        return database(`SELECT * FROM ${table} WHERE ${condition}`);

    }

    query(query) {
        return database(query)
    }

    create(table, columns, values) {
        const query = `INSERT INTO ${table} (${columns.join()}) VALUES (${values.join()})`;
        console.log('[CREATE]',query)
        return database(query);
    }

    update(table, id, column, value){
        const query = `UPDATE ${table} SET ${column} = ${value} WHERE id = ${id}`;
        console.log('[UPDATE]',query)
        return database(query);
    }

    delete(table, id){
        const query = `DELETE FROM ${table} WHERE id = ${id}`;
        return database(query)
    }
}
module.exports = orm