const db = require('../db-config');

const getAll = () => db('ingredients');

const getById = id => db('ingredients').where({id}).first();

const getAllRecipes = id => {
    return db('recipes')
        .join('ingredients_recipes', 'recipes.id', 'ingredients_recipes.recipe_id')
        .where('ingredients_recipes.ingredient_id', '=', id)
        .select('name').orderBy('name');
}

module.exports = {
    getAll,
    getById,
    getAllRecipes
}