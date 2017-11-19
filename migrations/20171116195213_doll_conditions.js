
exports.up = (knex, Promise) => {
    return knex.schema.createTableIfNotExists('doll_condition', function (table) {
        table.increments();
        table.string('key').unique();
        table.string('name');
    })
};

exports.down = (knex, Promise) => {
    return knex.schema.dropTableIfExists('doll_condition')
};
