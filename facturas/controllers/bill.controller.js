import { Bill } from '../models/bill.js';

export const buscarFacturas = async (req, res) => {
  try {
    const facturas = await Bill.find();
    res.json(facturas);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las facturas', message: error.message});
  }
};

export const nuevaFactura = async (req, res) => {
  const {
    FechaEmision,
    IDProducto,
    Total,
    IDCliente
  } = req.body;

  const newBill = new Bill({
    FechaEmision,
    IDProducto,
    Total,
    IDCliente
  });

  try {
    const createdBill = await newBill.save();
    res.status(201).json(createdBill);
  } catch (error) {
    res.status(500).json({ error: 'Error al registrar la factura', message: error.message});
  }
};

export const buscarFactura = async (req, res) => {
  const billId = req.params.id;

  try {
    const bill = await Bill.findById(billId);
    if (bill) {
      res.json(bill);
    } else {
      res.status(404).json({ message: 'Factura no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la factura' });
  }
};

export const editarFactura = async (req, res) => {
  const billId = req.params.id;
  const {
    FechaEmision,
    IDProducto,
    Total,
    IDCliente
  } = req.body;

  try {
    const bill = await Bill.findByIdAndUpdate(
      billId,
      {
        FechaEmision,
        IDProducto,
        Total,
        IDCliente
      },
      { new: true }
    );

    if (bill) {
      res.json(bill);
    } else {
      res.status(404).json({ message: 'Factura no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar la factura',  message: error.message  });
  }
};

export const eliminarFactura = async (req, res) => {
  const billId = req.params.id;

  try {
    const bill = await Bill.findByIdAndRemove(billId);
    if (bill) {
      res.json({ message: 'Factura eliminada correctamente' });
    } else {
      res.status(404).json({ message: 'Factura no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la factura', message: error.message });
  }
};