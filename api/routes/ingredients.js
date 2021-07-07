const express = require('express');
const router = express.Router();
const verifyIngredientId = require('../middleware/verifyIngredientId');
const ingredientsDB = require('../../data/helpers/ingredients');

router.use('/:id', verifyIngredientId);

router.get('/', async (req, res, next) => {
    try {
        const ingredients = await ingredientsDB.getAll();
        res.json(ingredients);
    } catch(err) {
        next(err);
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const ingredient = await ingredientsDB.getById(req.params.id);
        res.json(ingredient);
    } catch(err) {
        next(err);
    }
});

router.get('/:id/recipes', async (req, res, next) => {
    try {
        const recipes = await ingredientsDB.getAllRecipes(req.params.id);
        res.json(recipes);
    } catch(err) {
        next(err);
    }
});

module.exports = router;