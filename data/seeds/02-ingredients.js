
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {name: 'lbs of raw shrimp'},
        {name: 'cup of olive oil'},
        {name: 'diced onion'},
        {name: 'minced garlic clove'},
        {name: 'cup of roasted red pepper'},
        {name: 'cup of chopped cillantro'},
        {name: 'diced tomatoes'},
        {name: 'cup of coconut milk'},
        {name: 'tablespoons of fresh lime juice'},
        {name: 'salt'},
        {name: 'pepper'},
        {name: 'lbs of tenderloin'},
        {name: 'tablespoons of sweet paprika'},
        {name: 'tablespoons of flour'},
        {name: 'tablespoons of olive oil'},
        {name: 'tablespoon of butter'},
        {name: 'cup of fresh mushrooms'},
        {name: 'tablespoon of Dijon mustard'},
        {name: 'tablespoons of ketchup'},
        {name: 'tablespoons of Worcestershire sauce'},
        {name: 'can of peeled tomatoes'},
        {name: 'can of table cream (creme de leite)'}
      ]);
    });
};
