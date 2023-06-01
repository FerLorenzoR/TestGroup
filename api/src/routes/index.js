//------------IMPORTACIONES------------

const { Router } = require('express');
const dogsRouter = require ('./routerDog');
const temperamentsRouter = require ('./routerTemperament')


//---------------ROUTERS---------------

const router = Router ();

router.use ('/dogs', dogsRouter);
router.use ('/temperaments', temperamentsRouter);

//------------EXPORTACIONES------------

module.exports = router;
