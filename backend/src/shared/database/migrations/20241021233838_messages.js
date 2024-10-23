/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('messagens', function (table) {
    table.increments('id').primary();
    table.text('content', 500).notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
    table.string('status', 20).defaultTo('active');

    table.integer('topic_id').notNullable();
    table.foreign('topic_id').references('id').inTable('topics');

    table.integer('users_id').unsigned().notNullable();
  });
};
/**
 *     table.boolean('like').required();

 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('messagens');
};
