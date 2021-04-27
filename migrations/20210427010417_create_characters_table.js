exports.up = function(knex) {
  return knex.schema.createTable('characters', function(tbl) {
      tbl.text('name').notNullable();
      tbl.text('height').notNullable();
      tbl.text('weight').notNullable();
      tbl.text('style').notNullable();
      tbl.text('firstAppearance').notNullable();
      tbl.text('occupation').notNullable();
      tbl.text('rival').notNullable();
      tbl.primary('name');
  })
};
exports.down = function(knex) {
    return knex.schema.dropTable('characters')
};
