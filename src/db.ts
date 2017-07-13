import * as Knex from 'knex';

import { Model } from 'objection';

export async function connect(): Promise<void> {
  const connection = Knex(<any>{
    client: 'postgresql',
    connection: {
      host: 'localhost',
      port: 5432,
      database: 'node',
      user: 'node',
      password: '123'
    },
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds'
    }
  });

  Model.knex(connection);

  try {
    await connection.migrate.latest();
    console.log('migrations completed');

    await connection.seed.run();
    console.log('database completed');
  } catch (err) {
    console.error(err);
  }
}