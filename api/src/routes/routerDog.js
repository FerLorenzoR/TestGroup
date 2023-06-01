//------------IMPORTACIONES------------

const { Router } = require ('express');
const { getDogs } = require ('../handlers/dog-handlers/GET_Dog_handler');
const { getDogbyId } = require ('../handlers/dog-handlers/GET_DogID_handler');
const { postDog } = require ('../handlers/dog-handlers/POST_Dog_handler');

//---------------ROUTERS---------------

const dogsRouter = Router ();

dogsRouter.get('/', getDogs);
dogsRouter.get('/:id', getDogbyId);
dogsRouter.post('/', postDog);

//------------EXPORTACIONES------------

module.exports = dogsRouter;