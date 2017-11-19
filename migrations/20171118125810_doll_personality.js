
exports.up = function(knex, Promise) {
    return knex.schema.createTableIfNotExists('doll_personality', function(table) {
        table.increments();
        table.timestamps();
        table.string('key').unique();
        table.string('name');
        table.string('description');    
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('doll_personality');
};
