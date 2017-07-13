import * as Knex from 'knex';

export async function up(knex: Knex) {
  await knex.schema.createTable('User', table => {
    table.increments('id').primary();
    table.string('name', 250).notNullable();
    table.string('email', 250).notNullable();
    table.integer('age').notNullable().defaultTo(18);
  });

  await knex.schema.createTable('Post', table => {
    table.increments('id').primary();
    table.integer('userId').references('id').inTable('User').onDelete('CASCADE').notNullable();
    table.string('slug', 200).notNullable();
    table.string('title', 200).notNullable();
    table.text('content').notNullable();
    table.dateTime('createdDate').notNullable();
    table.dateTime('updatedDate').notNullable();

    table.unique(['slug']);
  });
}

export async function down(knex: Knex) {
  await knex.schema.dropTableIfExists('Post');
  await knex.schema.dropTableIfExists('User');
}
