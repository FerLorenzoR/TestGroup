//------------IMPORTACIONES------------

const {Dog, Temperament } = require ('../../db');
const axios = require('axios');
const { DB_URL } = process.env;

//--------------CONTROLLER-------------

const DogByName = async (name) => {

    const dogName = await Dog.findAll({
        include : [{
            model: Temperament,
            attributes: ['name'],
            through: {
                attributes: []
            }
        }]
    });

    const cleanDogs = dogName.map((dogs) => {
        return {
            id : dogs.id,
            name : dogs.name,
            image : dogs.image,
            weight : dogs.weight,
            height : dogs.height,
            life_span : dogs.life_span,
            temperament : dogs.temperaments?.map(obj => obj.name).join(', '),
        }
    });

    const AllBreeds = await axios.get(`${DB_URL}`)
    const oneBreed = AllBreeds.data.map(dogs => {
        return {
            id : dogs.id,
            name : dogs.name,
            image : dogs.image.url,
            weight : dogs.weight.metric,
            height : dogs.height.metric,
            life_span : dogs.life_span,
            temperament : dogs.temperament,
        }
    });

    const response = [...cleanDogs, ...oneBreed];
    const responseClean = response.filter((dog) => dog.name.toLowerCase().includes(name.toLowerCase()));
    return responseClean;

};

//------------EXPORTACIONES------------

module.exports = {
    DogByName,
}