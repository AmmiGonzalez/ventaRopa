import express from 'express'
import { buscarUsuarios, buscarUsuario, nuevoUsuario, editarUsuario, eliminarUsuario } from '../controllers/usser.controller.js';
const router=express.Router()

router.get('/buscarUsuarios', buscarUsuarios)
router.post('/nuevoUsuario', nuevoUsuario)
router.get('/buscarUsuario/:id', buscarUsuario)
router.put('/editarUsuario/:id', editarUsuario)
router.delete('/eliminarUsuario/:id', eliminarUsuario)

export default router