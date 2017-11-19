'use strict';

const knex = require('knex');

class KnexProvider {
    constructor() {
       this._knex = knex({
          client: 'pg',
          connection: {
            host : 'postgres',
            user : 'postgres',
            password : '',
            database : 'postgres'
          }
        }); 
    }

    getProvider() {
        return this._knex;
    }
}

module.exports = KnexProvider; 
