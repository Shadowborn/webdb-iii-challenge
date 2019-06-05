
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cohorts')
    .truncate() // Change .del() to .truncate() so we reset the primary key back to 1 in addition to deleting the data
    .then(function () {
      // Inserts seed entries
      return knex('cohorts').insert([
        {name: 'Student'}, //delete id's and change column to name
        {name: 'TA'},
        {name: 'PM'}
      ]);
    });
};


//console commands
// npx knex seed:make 001-roles
// npx knex seed:run


// ORM research this later. (Object relational Mapper)

// seeding deals with data, migrations deal with schema