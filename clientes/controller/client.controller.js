import { Client } from '../models/clients.js';

export const buscarClientes = async (req, res) => {
  try {
    const clientes = await Client.find();
    res.json(clientes);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los clientes', message: error.message});
  }
};

export const nuevoCliente = async (req, res) => {
  const {
    NIT,
    Nombre,
    FechaNacimiento,
    Telefono,
    Correo
  } = req.body;

  const newClient = new Client({
    NIT,
    Nombre,
    FechaNacimiento,
    Telefono,
    Correo
  });

  try {
    const createdClient = await newClient.save();
    res.status(201).json(createdClient);
  } catch (error) {
    res.status(500).json({ error: 'Error al registrar el cliente', message: error.message});
  }
};

export const buscarCliente = async (req, res) => {
  const clientId = req.params.id;

  try {
    const client = await Client.findById(clientId);
    if (client) {
      res.json(client);
    } else {
      res.status(404).json({ message: 'Cliente no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el cliente' });
  }
};

export const editarCliente = async (req, res) => {
  const clientId = req.params.id;
  const {
    NIT,
    Nombre,
    FechaNacimiento,
    Telefono,
    Correo
  } = req.body;

  try {
    const client = await Client.findByIdAndUpdate(
      clientId,
      {
        NIT,
        Nombre,
        FechaNacimiento,
        Telefono,
        Correo
      },
      { new: true }
    );

    if (client) {
      res.json(client);
    } else {
      res.status(404).json({ message: 'Cliente no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el cliente',  message: error.message  });
  }
};

export const eliminarCliente = async (req, res) => {
  const clientId = req.params.id;

  try {
    const client = await Client.findByIdAndRemove(clientId);
    if (client) {
      res.json({ message: 'Cliente eliminado correctamente' });
    } else {
      res.status(404).json({ message: 'Cliente no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el cliente', message: error.message });
  }
};