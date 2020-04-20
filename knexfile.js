// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './data/recipes.db3'
    },
    // needed when using foreign keys
    pool: {
      afterCreate: (conn, done) => {
        // runs after a connection is made to the sqlite engine
        conn.run('PRAGMA foreign_keys = ON', done); // turn on FK enforcement
      },
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  },

  production: {
    client: 'pq',
    connection: process.env.DATABASE_URL,
    searchPath: ['public'],
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: __dirname + '/data/migrations'
    },
    seeds: {
      directory: __dirname + '/data/seeds'
    }
  }

};
