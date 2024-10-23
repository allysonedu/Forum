const { table } = require('../connection');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.alterTable('topics', table => {
    table.integer('likes').defaultTo(0);
    table.dropColumn('views');

    table.dropColumn('ultimo_autor_resposta_id');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.alterTable('topics', table => {
    table.dropColumn('likes');

    table.integer('views');

    table.integer('ultimo_autor_resposta_id');
  });
};
