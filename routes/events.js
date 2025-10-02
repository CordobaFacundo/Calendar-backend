/*
    Events routes
    /api/events
*/

const { Router } = require('express');
const { validarJWT } = require('../middlewares/validar-jwt');
const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/events');

const router = Router();

// Todas las rutas que vengan de aqui deben pasar por la validacion del JWT
router.use( validarJWT );


router.get('/', getEventos );


router.post('/', crearEvento );


router.put('/:id', actualizarEvento );


router.delete('/:id', eliminarEvento );

module.exports = router;