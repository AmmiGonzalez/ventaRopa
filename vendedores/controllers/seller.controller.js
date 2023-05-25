import { Seller } from '../models/seller.js';

export const buscarVendedores = async (req, res) => {
  try {
    const vendedores = await Seller.find();
    res.json(vendedores);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los vendedores', message: error.message});
  }
};

export const nuevoVendedor = async (req, res) => {
  const {
    Nombre,
    FechaNacimiento,
    Telefono,
    Salario,
    FechaContratacion,
    Correo
  } = req.body;

  const newSeller = new Seller({
    Nombre,
    FechaNacimiento,
    Telefono,
    Salario,
    FechaContratacion,
    Correo
  });

  try {
    const createdSeller = await newSeller.save();
    res.status(201).json(createdSeller);
  } catch (error) {
    res.status(500).json({ error: 'Error al registrar el vendedor', message: error.message});
  }
};

export const buscarVendedor = async (req, res) => {
  const sellerId = req.params.id;

  try {
    const seller = await Seller.findById(sellerId);
    if (seller) {
      res.json(seller);
    } else {
      res.status(404).json({ message: 'Vendedor no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el vendedor' });
  }
};

export const editarVendedor = async (req, res) => {
  const sellerId = req.params.id;
  const {
    Nombre,
    FechaNacimiento,
    Telefono,
    Salario,
    FechaContratacion,
    Correo
  } = req.body;

  try {
    const seller = await Seller.findByIdAndUpdate(
      sellerId,
      {
        Nombre,
        FechaNacimiento,
        Telefono,
        Salario,
        FechaContratacion,
        Correo
      },
      { new: true }
    );

    if (seller) {
      res.json(seller);
    } else {
      res.status(404).json({ message: 'Vendedor no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el vendedor',  message: error.message  });
  }
};

export const eliminarVendedor = async (req, res) => {
  const sellerId = req.params.id;

  try {
    const seller = await Seller.findByIdAndRemove(sellerId);
    if (seller) {
      res.json({ message: 'Vendedor eleminado correctamente' });
    } else {
      res.status(404).json({ message: 'Vendedor no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el vendedor', message: error.message });
  }
};