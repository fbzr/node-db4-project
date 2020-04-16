
exports.up = function(knex) {
    return knex.schema.createTable('recipes', tbl => {
      tbl.increments();
      tbl.string('name', 128).notNullable();
    })
    .createTable('ingredients', tbl => {
        tbl.increments();
        tbl.string('name', 128).notNullable();
    })
    .createTable('ingredients_recipes', tbl => {
        tbl.increments();
        tbl.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipes')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        tbl.integer('ingredient_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('ingredients')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        tbl.float('quantity', 14, 10);
    })
    .createTable('instructions', tbl => {
        tbl.increments();
        tbl.text('description').notNullable();
        tbl.integer('step').notNullable();
        tbl.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipes')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    });
};
  
  exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('instructions')
        .dropTableIfExists('ingredients_recipes')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipes');
  };