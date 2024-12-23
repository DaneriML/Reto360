
// import sql from "mssql"
// import USERS from '../config/config.mjs' 


// const config = {
//     user: 'sa',         // Usuario de SQL Server
//     password: '1234',  // Contraseña de SQL Server
//     server: 'localhost',        // Dirección del servidor (localhost para local)
//     database: 'GDA00535_OT_Darwin_Morales',  // Nombre de la base de datos
//     options: {
//         encrypt: false,         // No necesitas cifrado en conexiones locales
//         trustServerCertificate: true, // Evita problemas de certificados
//         port: 1433              // Puerto predeterminado de SQL Server
//     }
// };

// async function testConnection() {
//     try {
//         const pool = await sql.connect(config);
//         console.log("Conexión exitosa a SQL Server");

//         pool.close(); // Cierra la conexión después de probar
//     } catch (err) {
//         console.error("Error en la conexión:", err.message);
//     }
// }

// export default testConnection;

import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('GDA00535_OT_Darwin_Morales', 'sa', '1234', {
    host: 'localhost',
    dialect: 'mssql',
    port: 1433,
    logging: false,
    dialectOptions: {
        options: {
            encrypt: false, // Cambiar a true si usas Azure
            trustServerCertificate: true, // Evita errores de certificado en conexiones locales
        },
    },
});


export {sequelize};
