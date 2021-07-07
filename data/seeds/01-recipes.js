
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {name: 'Moqueca de Camarão (Brazilian Shrimp Stew)'},
        {name: 'Brazilian Beef Stroganoff'}
      ]);
    });
};
