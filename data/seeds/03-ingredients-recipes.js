
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients_recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients_recipes').insert([
        { recipe_id: 1, ingredient_id: 1, quantity: 1.5 },
        { recipe_id: 1, ingredient_id: 2, quantity: 0.25 },
        { recipe_id: 1, ingredient_id: 3, quantity: 0.5 },
        { recipe_id: 1, ingredient_id: 4, quantity: 1 },
        { recipe_id: 1, ingredient_id: 5, quantity: 0.25 },
        { recipe_id: 1, ingredient_id: 6, quantity: 0.25 },
        { recipe_id: 1, ingredient_id: 7, quantity: 1 },
        { recipe_id: 1, ingredient_id: 8, quantity: 1 },
        { recipe_id: 1, ingredient_id: 9, quantity: 1 },
        { recipe_id: 1, ingredient_id: 10 },
        { recipe_id: 1, ingredient_id: 11 },
        { recipe_id: 2, ingredient_id: 12, quantity: 2 },
        { recipe_id: 2, ingredient_id: 13, quantity: 4 },
        { recipe_id: 2, ingredient_id: 14, quantity: 2 },
        { recipe_id: 2, ingredient_id: 15, quantity: 2 },
        { recipe_id: 2, ingredient_id: 16, quantity: 1 },
        { recipe_id: 2, ingredient_id: 3, quantity: 1.5 },
        { recipe_id: 2, ingredient_id: 17, quantity: 1 },
        { recipe_id: 2, ingredient_id: 18, quantity: 1 },
        { recipe_id: 2, ingredient_id: 19, quantity: 2 },
        { recipe_id: 2, ingredient_id: 21, quantity: 1 },
        { recipe_id: 2, ingredient_id: 22, quantity: 1 },
        { recipe_id: 2, ingredient_id: 10 },
        { recipe_id: 2, ingredient_id: 11 }
      ]);
    });
};
