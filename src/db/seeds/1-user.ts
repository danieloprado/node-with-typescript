import * as Knex from 'knex';

export async function seed(knex: Knex) {
  const result = await knex.count('id').from('User').first();

  if (result.count > 0) {
    return;
  }

  await knex.insert({
    name: 'Daniel Prado',
    email: 'danielprado.ad@gmail.com',
    age: 25
  }).into('User');
}
