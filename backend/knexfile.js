module.exports = {
    development: {
      client: 'pg',
      connection: {
        host: 'localhost',             // O la dirección IP si es un servidor remoto
        user: 'postgres',            // Cambia "tu_usuario" por el nombre de usuario correcto
        password: 'holaboris21',     // Cambia "tu_contraseña" por la contraseña correcta
        database: 'red_social'         // Asegúrate de que el nombre de la base de datos sea correcto
      },
      migrations: {
        directory: './migrations'
      }
    }
  };
  