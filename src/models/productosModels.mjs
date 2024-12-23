// import { Sequelize, DataTypes } from 'sequelize';
// import { sequelize } from '../database/connection.mjs';

// const Product = sequelize.define('Productos', {
//   id: {
//     type: DataTypes.INTEGER,
//     autoIncrement: true,
//     primaryKey: true,
//     allowNull: false
//   },
//   nombre_productos: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   description: {
//     type: DataTypes.TEXT,
//     allowNull: true
//   },
//   precio: {
//     type: DataTypes.FLOAT,
//     allowNull: false
//   },
//   stock: {
//     type: DataTypes.INTEGER,
//     allowNull: false
//   },
//   createdAt: {
//     type: DataTypes.DATE,
//     allowNull: false,
//     defaultValue: DataTypes.NOW
//   },
//   updatedAt: {
//     type: DataTypes.DATE,
//     allowNull: false,
//     defaultValue: DataTypes.NOW
//   }
// }, {
//   tableName: 'products',
//   timestamps: true
// });

// export default Product;

import { DataTypes } from 'sequelize';
import { sequelize } from '../database/connection.mjs';

const Product = sequelize.define('Productos', {
  idProductos: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false
  },
  categoriaProductos_idCategoriasProductos:{
    type: DataTypes.INTEGER,
    allowNull: false
  },
  usuarios_idUsuarios:{
    type: DataTypes.INTEGER,
    allowNull: false
  },
  nombre_productos:
  {
    type: DataTypes.STRING(45),
    allowNull: false
  },
  marca: {
    type: DataTypes.STRING(45)
  },
  codigo: {
    type: DataTypes.STRING(45)
  },
  stock: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  estados_idEstados: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  precio: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  fecha_creacion: {
    type: DataTypes.DATE,
    allowNull: false
  },
}, {
  tableName: 'Productos',
  timestamps: false
});

export default Product;

