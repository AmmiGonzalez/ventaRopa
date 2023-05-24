import { Product } from '../models/product.js';

export const buscarProductos = async (req, res) => {
  try {
    const productos = await Product.find();
    res.json(productos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los productos', message: error.message});
  }
};

export const nuevoProducto = async (req, res) => {
  const {
    Descripcion,
    PrecioCompra,
    PrecioVenta,
    Color,
    Marca,
    Talla
  } = req.body;

  const newProduct = new Product({
    Descripcion,
    PrecioCompra,
    PrecioVenta,
    Color,
    Marca,
    Talla
  });

  try {
    const createdProduct = await newProduct.save();
    res.status(201).json(createdProduct);
  } catch (error) {
    res.status(500).json({ error: 'Error al registrar el producto', message: error.message});
  }
};

export const buscarProducto = async (req, res) => {
  const productId = req.params.id;

  try {
    const product = await Product.findById(productId);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: 'Producto no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el producto' });
  }
};

export const editarProducto = async (req, res) => {
  const productId = req.params.id;
  const {
    Descripcion,
    PrecioCompra,
    PrecioVenta,
    Color,
    Marca,
    Talla
  } = req.body;

  try {
    const product = await Product.findByIdAndUpdate(
      productId,
      {
        Descripcion,
        PrecioCompra,
        PrecioVenta,
        Color,
        Marca,
        Talla
      },
      { new: true }
    );

    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: 'Producto no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el producto',  message: error.message  });
  }
};

export const eliminarProducto = async (req, res) => {
  const productId = req.params.id;

  try {
    const product = await Product.findByIdAndRemove(productId);
    if (product) {
      res.json({ message: 'Producto eleminado correctamente' });
    } else {
      res.status(404).json({ message: 'Producto no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el producto', message: error.message });
  }
};