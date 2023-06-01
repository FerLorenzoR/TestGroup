//------------IMPORTACIONES------------

const { Router } = require ('express');
const { getTemperaments } = require ('../handlers/temperament-handlers/GET_Temperament_handler');

//---------------ROUTERS---------------

const temperamentsRouter = Router()

temperamentsRouter.get('/', getTemperaments)

//------------EXPORTACIONES------------

module.exports = temperamentsRouter