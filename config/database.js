module.exports = {
  connection: 'mysql', // Certifique-se de que está usando o MySQL e não SQLite

  mysql: {
    client: 'mysql2',  // O cliente para MySQL
    connection: {
      host: '127.0.0.1',
      user: 'root',     // Seu usuário do banco de dados
      password: '',     // Sua senha do banco de dados
      database: 'adonis', // Nome do seu banco de dados
    },
  },

  // Outras configurações de banco de dados...
}
