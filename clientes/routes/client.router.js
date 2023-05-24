import express from 'express'
import { buscarClientes, buscarCliente, nuevoCliente, editarCliente, eliminarCliente } from '../controller/client.controller.js';
const router=express.Router()

router.get('/buscarClientes', buscarClientes)
router.post('/nuevoCliente', nuevoCliente)
router.get('/buscarCliente/:id', buscarCliente)
router.put('/editarCliente/:id', editarCliente)
router.delete('/eliminarCliente/:id', eliminarCliente)

export default router