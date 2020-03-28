
exports.up = function(knex) {
    return knex.schema.createTable('plants', function(table) {
      table.string('id').primary();
      table.string('name').notNullable();
      table.string('strain').notNullable();
      table.string('nickname', 10).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('plants');
};
