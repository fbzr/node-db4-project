const db = require('./db-config');

const getAll = () => db('recipes');

const getById = id => db('recipes').where({id}).first();

const getShoppingList = id => {
    return db('ingredients_recipes')
        .where('ingredients_recipes.recipe_id', id)
        .join('ingredients', 'ingredients.id', 'ingredients_recipes.ingredient_id')
        .select('ingredients.name as ingredient', 'ingredients_recipes.quantity');
}

const add = async recipe => {
    const [id] = await db('recipes').insert(recipe, 'id');
    return getById(id);
}

const remove = id => db('recipes').where({id}).del();

const update = async (id, recipe) => {
    const count = await db('recipes').where({id}).update(recipe);
    return count ? getById(id) : null;
}

module.exports = {
    getAll,
    getById,
    getShoppingList,
    add,
    remove,
    update
}