import * as Knex from 'knex';

export async function seed(knex: Knex) {
  const result = await knex.count('id').from('Post').first();

  if (result.count > 0) {
    return;
  }

  const user = await knex.from('User').where('email', '=', 'danielprado.ad@gmail.com').first();

  await knex.insert({
    title: 'Meu post',
    slug: 'meu-post',
    content: 'Não tem nada aqui',
    userId: user.id,
    createdDate: new Date(),
    updatedDate: new Date()
  }).into('Post');

  await knex.insert({
    title: 'Meu segundo',
    slug: 'meu-segundo',
    content: 'Não tem nada aqui mesmo! 2',
    userId: user.id,
    createdDate: new Date(),
    updatedDate: new Date()
  }).into('Post');

  await knex.insert({
    title: 'Meu post 3',
    slug: 'meu-post-3',
    content: 'Não tem nada aqui eita! 3',
    userId: user.id,
    createdDate: new Date(),
    updatedDate: new Date()
  }).into('Post');
};
