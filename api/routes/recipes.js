const express = require('express');
const recipesDB = require('../../data/recipes');
const verifyRecipeId = require('../middleware/verifyRecipeId');

const router = express.Router();

// Verify recipe id when param exists
router.use('/:id', verifyRecipeId);

// @route   GET /api/recipes
// @desc    return all recipes
router.get('/', async (req, res, next) => {
    try {
        const recipes = await recipesDB.getAll();
        res.json(recipes);
    } catch (err) {
        next(err);
    }
});

// @route   GET /api/recipes/:id
// @desc    return specific recipe
router.get('/:id', async (req, res, next) => {
    try {
        // req.recipe is set in verifyRecipeId middleware
        res.json(req.recipe);
    } catch (err) {
        next(err);
    }
});

// @route   GET /api/recipes/:id/shoppingList
// @desc    return ingredients and quantities
router.get('/:id/shoppingList', async (req, res, next) => {
    try {
        const list = await recipesDB.getShoppingList(req.params.id);
        res.json(list);
    } catch (err) {
        next(err);
    }
});

// @route   POST /api/recipes
// @desc    add new recipe
router.post('/', async (req, res, next) => {
    try {
        const recipe = await recipesDB.add(req.body);
        res.status(201).json(recipe);
    } catch (err) {
        next(err);
    }
});

// @route   DELETE /api/recipes/:id
// @desc    remove an recipe
router.delete('/:id', async (req, res, next) => {
    try {
        // It only runs if ID is valid
        await recipesDB.remove(req.params.id);
        res.json({ message: 'Recipe deleted' });
    } catch (err) {
        next(err);
    }
});

// @route   PUT /api/recipes/:id
// @desc    update an recipe
router.put('/:id', async (req, res, next) => {
    try {
        const recipe = await recipesDB.update(req.params.id, req.body);
        res.json(recipe);
    } catch (err) {
        next(err);
    }
});

module.exports = router;