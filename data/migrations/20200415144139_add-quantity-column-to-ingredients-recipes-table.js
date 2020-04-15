
exports.up = function(knex) {
    return knex.schema.table('ingredients_recepies', tbl => {
        tbl.float('quantity', 14, 10);
    });
};

exports.down = function(knex) {
    return knex.schema.table('ingredients_recepies', tbl => {
        tbl.dropColumn('quantity');
    });
};
