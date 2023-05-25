import express from 'express'
import { buscarVendedores, buscarVendedor, nuevoVendedor, editarVendedor, eliminarVendedor } from '../controllers/seller.controller.js';
const router=express.Router()

router.get('/buscarVendedores', buscarVendedores)
router.post('/nuevoVendedor', nuevoVendedor)
router.get('/buscarVendedor/:id', buscarVendedor)
router.put('/editarVendedor/:id', editarVendedor)
router.delete('/eliminarVendedor/:id', eliminarVendedor)

export default router