
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        // Moqueca de Camarão (Brazilian Shrimp Stew)
        { recipe_id: 1, step: 1, description: 'Heat olive oil in a medium saucepan.' },
        { recipe_id: 1, step: 2, description: 'Saute onions for several minutes until translucent, then add the garlic and peppers and cook for several minutes more.' },
        { recipe_id: 1, step: 3, description: 'Add the tomatoes, shrimp and cilantro to the pan and simmer gently until the shrimp turns opaque.' },
        { recipe_id: 1, step: 4, description: 'Pour in the coconut milk and cook just until heated through – do not boil.' },
        { recipe_id: 1, step: 5, description: 'Add lime juice and season with salt and pepper to taste.' },
        { recipe_id: 1, step: 6, description: 'Serve hot, garnished with fresh cilantro.' },
        // Brazilian Beef Stroganoff
        { recipe_id: 2, step: 1, description: 'In a large bowl, combine the meat, salt, pepper, paprika and flour. Make sure the meat is well coated. Reserve.' },
        { recipe_id: 2, step: 2, description: 'Heat one tablespoon olive oil in a large skillet, over medium heat, and then add the butter. Once butter is melted, add the grated onion and cook until it develops some color. Remove from heat and reserve.' },
        { recipe_id: 2, step: 3, description: 'In that same skillet, heat the remaining olive oil. When shimmering, add the beef and brown on all sides. Remove and reserve. Add the mushrooms and cook until they release liquid and are starting to brown, about 8 minutes. ' },
        { recipe_id: 2, step: 4, description: 'Return browned beef and onion back to the skillet. Add the Dijon mustard, ketchup and Worcestershire sauce.' },
        { recipe_id: 2, step: 5, description: 'Stir in the blended peeled tomatoes and cook until thickened slightly, about 5 minutes.' },
        { recipe_id: 2, step: 6, description: 'Add the heavy cream. Cook for another 3-5 minutes or until sauce has thickened to your preferences.' },
        { recipe_id: 2, step: 7, description: 'Serve immediately and enjoy.' }
      ]);
    });
};
