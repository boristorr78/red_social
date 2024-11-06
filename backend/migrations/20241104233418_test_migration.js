/*exports.up = function(knex) {
    return knex.schema.createTable('test_table', function(table) {
      table.increments('id').primary();
      table.string('name');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('test_table');
  };
  */


  exports.up = function(knex) {
    return knex.schema.createTable('users', (table) => {
      table.increments('id').primary();
      table.string('email').unique().notNullable();
      table.string('password').notNullable();
      table.string('name');
      table.timestamps();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users');
  };
  