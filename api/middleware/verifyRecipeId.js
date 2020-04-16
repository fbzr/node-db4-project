const recipesDB = require('../../data/recipes');

module.exports = async (req, res, next) => {
    try {
        const recipe = await recipesDB.getById(req.params.id);
        if (!recipe) {
            return res.status(400).json({
                errorMessage: 'Invalid recipe ID.'
            });
        }
        req.recipe = recipe;
        next();
    } catch(err) {
        next(err);
    }
}