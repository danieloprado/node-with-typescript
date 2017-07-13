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

  const user = await knex.from('User').first();

  await knex.insert({
    title: 'Meu post',
    slug: 'meu-post',
    content: 'Não tem nada aqui',
    userId: user.id,
    createdDate: new Date(),
    updatedDAte: new Date()
  }).into('Post');
};
