import express from 'express'
import { buscarFacturas, buscarFactura, nuevaFactura, editarFactura, eliminarFactura } from '../controllers/bill.controller.js';
const router=express.Router()

router.get('/buscarFacturas', buscarFacturas)
router.post('/nuevaFactura', nuevaFactura)
router.get('/buscarFactura/:id', buscarFactura)
router.put('/editarFactura/:id', editarFactura)
router.delete('/eliminarFactura/:id', eliminarFactura)

export default router