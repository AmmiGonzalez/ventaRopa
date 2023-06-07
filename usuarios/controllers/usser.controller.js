import { Usser } from '../models/usser.js';
import { validationResult, check } from 'express-validator';
import bcrypt from 'bcrypt';
import fs from 'node:fs'
import NodeRSA from 'node-rsa';

export const buscarUsuarios = async (req, res) => {
  try {
    // Agregar los validadores necesarios utilizando express-validator
    await check('Nombre').optional().trim().escape().run(req);
    await check('Contrasenia').optional().trim().escape().run(req);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const usuarios = await Usser.find().exec();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los usuarios', message: error.message});
  }
};

export const nuevoUsuario = async (req, res) => {
  try {
    // Agregar los validadores necesarios utilizando express-validator
    await check('Nombre').notEmpty().trim().escape().run(req);
    await check('Contrasenia').notEmpty().trim().escape().run(req);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      Nombre,
      Contrasenia
    } = req.body;

    // Cifrar la contraseña utilizando bcrypt
    const hashedPassword = await bcrypt.hash(Contrasenia, 10);

    const newUsser = new Usser({
      Nombre,
      Contrasenia: hashedPassword
    });

    const createdUsser = await newUsser.save();
    res.status(201).json(createdUsser);
  } catch (error) {
    res.status(500).json({ error: 'Error al registrar el usuario', message: error.message });
  }
};

function encryptString(data) {
  const privateKey = fs.readFileSync("../keys/private.pem")
  const key = new NodeRSA(privateKey)
  return key.encryptPrivate(data, "base64")
}

export const nuevoUsuarioRSA = async (req, res) => {
  try {
    // Agregar los validadores necesarios utilizando express-validator
    await check('Nombre').notEmpty().trim().escape().run(req);
    await check('Contrasenia').notEmpty().trim().escape().run(req);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      Nombre,
      Contrasenia
    } = req.body;

    // Cifrar la contraseña utilizando bcrypt
    //const hashedPassword = await bcrypt.hash(Contrasenia, 10);
    const hashedPassword = encryptString(Contrasenia);

    const newUsser = new Usser({
      Nombre,
      Contrasenia: hashedPassword
    });

    const createdUsser = await newUsser.save();
    res.status(201).json(createdUsser);
  } catch (error) {
    res.status(500).json({ error: 'Error al registrar el usuario', message: error.message });
  }
};

export const buscarUsuario = async (req, res) => {
  const usserId = req.params.id;

  try {
    const usser = await Usser.findById(usserId).exec();
    if (usser) {
      res.json(usser);
    } else {
      res.status(404).json({ message: 'Usuario no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el usuario' });
  }
};

export const editarUsuario = async (req, res) => {
  const usserId = req.params.id;
  const {
    Nombre,
    Contrasenia
  } = req.body;

  try {
    // Agregar los validadores necesarios utilizando express-validator
    await check('Nombre').notEmpty().trim().escape().run(req);
    await check('Contrasenia').notEmpty().trim().escape().run(req);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const usser = await Usser.findByIdAndUpdate(
      usserId,
      {
        Nombre,
        Contrasenia
      },
      { new: true }
    ).exec();

    if (usser) {
      res.json(usser);
    } else {
      res.status(404).json({ message: 'Usuario no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el usuario',  message: error.message  });
  }
};

export const eliminarUsuario = async (req, res) => {
  const usserId = req.params.id;

  try {
    const usser = await Usser.findByIdAndRemove(usserId).exec();
    if (usser) {
      res.json({ message: 'Usuario eliminado correctamente' });
    } else {
      res.status(404).json({ message: 'Usuario no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el usuario', message: error.message });
  }
};