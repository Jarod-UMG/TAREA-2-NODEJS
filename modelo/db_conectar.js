//https://www.npmjs.com/package/mysql
import mysql from 'mysql'
var conectar = mysql.createConnection({
      host     : 'localhost',
      user     : 'usr_tarea',
      password : 'abc123',
      database : 'db_tarea2njs'
  });

  conectar.connect(function(err) {
      if (err) {
          console.error('Error en la conexion: ' + err.stack);
      return;
    }
 
        console.log('conexion exitosa ID: ' + conectar.threadId);
  });

  export {conectar}