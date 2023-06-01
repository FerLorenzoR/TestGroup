//------------IMPORTACIONES------------

const {Dog, Temperament } = require ('../../db');
const axios = require('axios');
const { DB_URL } = process.env;

//--------------CONTROLLER-------------

const DogByID = async (id, source) => {

    if(source === 'db'){
        const Dogs = await Dog.findByPk(id, {
            include: {
                model: Temperament,
                attributes: ['name'],
                through: {
                    attributes: [],
                }
            }
        })
        //console.log(Dogs)
        const cleanDogs = [Dogs].map((dogs) => {
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
        console.log(cleanDogs)
        
        return cleanDogs
    };
    if(source==='api') {
        const url = await axios.get(`${DB_URL}`)
        const dog = url.data.find((d) => d.id == id)
        const cleanArr1 = {
            id: dog.id,
            image: dog.image.url,
            name: dog.name,
            height: dog.height.metric,
            weight: dog.weight.metric,
            lifeSpan: dog.life_span,
            temperaments: dog.temperament,
            created: false,
        }
        return cleanArr1
    };

};

//------------EXPORTACIONES------------

module.exports = {
    DogByID,
};