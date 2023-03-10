export default ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'wongames'),
      user: env('DATABASE_USERNAME', 'wongames'),
      password: env('DATABASE_PASSWORD', 'wongames1245'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
