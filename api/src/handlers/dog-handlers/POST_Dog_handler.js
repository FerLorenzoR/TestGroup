//------------IMPORTACIONES------------

const { createDog } = require ('../../controllers/dog-controllers/createDog_controller');

//---------------HANDLER---------------

const postDog = async (req, res) => {

    const { name, image, weight, height, life_span, temperament } = req.body;

    try {

        const newDog = await createDog( name, image, weight, height, life_span, temperament );
        res.status(200).json(newDog);

    } catch (error) {

        res.status(400).json({error: error.message})

    }
}

//------------EXPORTACIONES------------

module.exports = {
    postDog
}