exports.up = function(knex) {
  return knex.schema.createTable("notes", function(table) {
    table.increments();

    table.string("title").notNullable();
    table.date("date").notNullable();
    table.string("note", 10000).notNullable();

    table.string("plant_id").notNullable();
    table
      .foreign("plant_id")
      .references("id")
      .inTable("plants");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("notes");
};
