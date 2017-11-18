
exports.up = (knex, Promise) => {
    console.log('up');
    return knex.schema.createTableIfNotExists('doll_type', function (table) {
        table.increments();
        table.timestamps();
        table.string('key');
        table.string('name');
    })
};

exports.down = (knex, Promise) => {
    console.log('down');
    return knex.schema.dropTableIfExists('doll_type')
     
};
