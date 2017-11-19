'use strict';

const getDollById = dataProvider => id => {
    const knex = dataProvider.getProvider('KNEX');
console.log(knex);
    const table = knex('dolls');
    
    return table.select('*')
      .where('id', id)
      .limit(1)
      .then(console.log)
}

class DollsDao {
    constructor(dataProvider) {
        this.getById = getDollById(dataProvider);
    }
}
module.exports = DollsDao;
