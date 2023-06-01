//------------IMPORTACIONES------------

const { AllTemperaments } = require ('../../controllers/temperament-controllers/allTemperament')

//---------------HANDLER---------------

const getTemperaments = async (req, res) => {

    try {

        const response = await AllTemperaments();

        res.status(200).json(response)

    } catch (error) {

        res.status(400).json({error: error.message})

    }
}

//------------EXPORTACIONES------------

module.exports = {
    getTemperaments
}