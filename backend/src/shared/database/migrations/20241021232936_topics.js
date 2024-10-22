/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('topics', table => {
    table.increments('id').primary();
    table.string('title', 255).notNullable();
    table.text('content', 500).notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
    table.integer('views').defaultTo(0);
    table.integer('responses_count').defaultTo(0);
    table.string('status', 20).defaultTo('active');
    table.integer('ultimo_autor_resposta_id').unsigned();

    table.integer('user_id').notNullable();
    table.foreign('user_id').references('id').inTable('users');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('topics');
};
