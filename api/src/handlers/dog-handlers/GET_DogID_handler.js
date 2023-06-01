//------------IMPORTACIONES------------

const { DogByID } = require ('../../controllers/dog-controllers/DogbyID_controller')

//---------------HANDLER---------------

const getDogbyId = async (req, res) => {

    const { id } = req.params
    const source = 
        isNaN(id)
        ? 'db'
        : 'api'

    try {

        const response= await DogByID(id, source)
        res.status(200).json(response)

    } catch (error) {

        res.status(400).json({error: error.message})

    }
}

//------------EXPORTACIONES------------

module.exports = {
    getDogbyId
}