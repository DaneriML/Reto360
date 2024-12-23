import { Sequelize, DataTypes } from 'sequelize';
import { sequelize } from '../database/connection.mjs';

const User = sequelize.define('Usuarios', {
  idusuarios: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  rol_idrol: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  estados_idestados: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  correo_electronico: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  nombre_completo: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  password: {
    type: DataTypes.STRING(250),
    allowNull: false
  },
  telefono: {
    type: DataTypes.STRING(45),
    allowNull: true
  },
  fecha_nacimiento: {
    type: DataTypes.DATE,
    allowNull: true
  },
  fecha_creacion: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  clientes_idClientes: {
    type: DataTypes.INTEGER,
    allowNull: true
  }
}, {
  tableName: 'Usuarios',
  timestamps: false
});

export default User;