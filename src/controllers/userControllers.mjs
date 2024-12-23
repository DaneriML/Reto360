import bcrypt from 'bcrypt';
import User from '../models/userModels.mjs';

async function createUser(req, res) {
  try {
    const data = req.body;

    // Valida campos requeridos
    if (!data.correo_electronico || !data.password || !data.rol_idrol || !data.estados_idestados) {
      return res.status(400).json({ message: 'Faltan campos requeridos.' });
    }

    // Encripta la contraseña
    const salt = await bcrypt.genSalt(10);
    data.password = await bcrypt.hash(data.password, salt);

    // Crea el usuario
    const newUser = await User.create(data);
    res.status(201).json({ message: 'Usuario creado exitosamente.', user: newUser });
  } catch (error) {
    res.status(500).json({ message: 'Error al crear usuario.', error: error.message });
  }
};


async function updateUser(req, res) {
  try {
    const { id } = req.body;
    const data = req.body;

    // Encripta la contraseña si se está actualizando
    if (data.password) {
      const salt = await bcrypt.genSalt(10);
      data.password = await bcrypt.hash(data.password, salt);
    }

    // Actualiza el usuario
    await updated.update(data);
    if (!updated) {
      res.status(404).json({ message: 'Usuario no encontrado.' });
    }

    // Devuelve el usuario actualizado
    const updatedUser = await User.findByPk(id);
    res.status(200).json({ message: 'Usuario actualizado exitosamente.', user: updatedUser });
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar usuario.', error: error.message });
  }
}

export { createUser, updateUser };