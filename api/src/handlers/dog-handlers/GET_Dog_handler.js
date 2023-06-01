//------------IMPORTACIONES------------

const { AllDogs } = require ('../../controllers/dog-controllers/allDog_controller');
const { DogByName } = require ('../../controllers/dog-controllers/DogbyName_controller');

//---------------HANDLER---------------

const getDogs = async (req, res) => {

    const { name } = req.query;

    try {

        const response = 
            name
            ? await DogByName(name)
            : await AllDogs();

        res.status(200).json(response);

    } catch (error) {

        res.status(400).json({error: error.message})

    }
}

//------------EXPORTACIONES------------

module.exports = {
    getDogs
}