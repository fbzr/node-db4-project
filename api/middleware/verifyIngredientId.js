const ingredientsDB = require('../../data/helpers/ingredients');

module.exports = async (req, res, next) => {
    try {
        const ingredient = await ingredientsDB.getById(req.params.id);
        if (!ingredient) {
            return res.status(400).json({
                errorMessage: 'Invalid ingredient ID.'
            });
        }
        req.ingredient = ingredient;
        next();
    } catch(err) {
        next(err);
    }
}