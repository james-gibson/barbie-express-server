'use strict';
const KnexProvider = require('./knexProvider');

class DataProvider {
    constructor(providers) {
      const tmpMap = new Map();

      tmpMap.set(providers.map(x => [x.key, x.value]));

      this._providers = tmpMap;   
    }

    getProvider(key) { return this._providers.has(key) ? null : this._providers.get(key)}
}

module.exports = {
    init: () => {
        return new DataProvider([
            {key: 'KNEX', value: new KnexProvider().getProvider()},
        ]);
    },
}
