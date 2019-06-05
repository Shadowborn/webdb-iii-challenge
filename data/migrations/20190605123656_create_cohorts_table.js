// new changes to the database schema
exports.up = function(knex, Promise) {
    return knex.schema.createTable('cohorts', function(tbl) {
        // our table had a primary key id, that auto increments and is an integer
      tbl.increments();//Creates primary id that auto increments
  
        // and a varchar called name, 128, unique not null
      tbl
      .string('name', 128)
      .notNullable()
      .unique(); 
      // Javascript that translates to our SQL
      });
  };
  
  // how to undo the changes to the schema
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('cohorts');
  };
  
  //npx knex migrate:make create_roles_table
  
  // migrations are a way to keep a record of all your changes to your schema
