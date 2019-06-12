
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('students')
    .truncate() // Change .del() to .truncate() so we reset the primary key back to 1 in addition to deleting the data
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        {name: 'James'}, //delete id's and change column to name
        {name: 'Morgoth'},
        {name: 'Gandalf'}
      ]);
    });
};
