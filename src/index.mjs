import app from "./app.mjs";
import { sequelize } from './database/connection.mjs';


const PORT = process.env.PORT || 3000;

async function testConnection() {
  try {
      await sequelize.authenticate();
      console.log("Conexión exitosa a SQL Server");
  } catch (err) {
      console.error("Error en la conexión:", err.message);
  }
}

app.get('', (req, res) => {
  res.send('¡Bienvenido a la API de Mi Tiendita Online! 1');
});

app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
})

testConnection();