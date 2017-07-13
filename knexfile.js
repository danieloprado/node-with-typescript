module.exports = {

  development: {
    client: 'postgresql',
    migrations: {
      directory: 'src/db/migrations'
    },
    seeds: {
      directory: 'src/db/seeds'
    }
  }

};