// Update with your config settings.
console.log(process.env.DATABASE_URL);
module.exports = {
  docker: {
      client: 'pg',
      connection: {
          user: 'postgres',
          host: 'postgres',
          port: '5432',
      },
  },
  development: { 
      client: 'pg', 
      connection: {
        user: 'postgres',
        password: '',
        host: 'postgres',
        port: '5432',
      },
  },
  production: { client: 'pg', connection: process.env.DATABASE_URL }
};
