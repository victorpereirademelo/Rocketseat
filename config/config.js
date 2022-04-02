module.exports = {
  development: {
    username: "amigo", // Seu username
    password: null, // Sua senha
    database: "sqlnode", // Seu banco de dados
    host: "localhost", // Seu servidor
    dialect: "postgres", // Seu gerenciador de banco de dados
    logging: false,
    define: {
      timestamps: true,
      underscored: true,
    }
  }
};
