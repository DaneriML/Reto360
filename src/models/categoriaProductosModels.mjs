import { DataTypes } from 'sequelize';
import { sequelize } from '../database/connection.mjs';

const CategoriaProductos = sequelize.define('CategoriaProductos', {
  idCategoriaProductos: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  usuarios_idusuarios: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  estados_idestados: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  fecha_creacion: {
    type: DataTypes.DATE,
    allowNull: false
  }
}, {
  timestamps: false,
  tableName: 'CategoriaProductos'
});

export default CategoriaProductos;