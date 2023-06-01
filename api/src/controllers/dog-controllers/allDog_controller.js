//------------IMPORTACIONES------------

const { Dog, Temperament } = require ('../../db');
const axios = require ('axios');
const { DB_URL } = process.env;

//--------------CONTROLLER-------------

const cleanArray = ( array ) => 
    array.data.map ((dogs) => {                     /* Traer los objetos(dogs) del array solo con las propiedades que usare                 */ 
        return {                                    /* id, name, image{url}, weight{metric}, height{metric}, life_span, temperament         */
            id : dogs.id,                           /* Inserto el 'created' con valor en false, ya que son los ya existentes en la restApi  */
            name : dogs.name,
            image : dogs.image.url,
            weight : dogs.weight.metric,
            height : dogs.height.metric,
            life_span : dogs.life_span,
            temperament : dogs.temperament,
            created : false,
        };
    });


const dataAPI = async () => {

    const urlDogs = await axios.get(`${DB_URL}`);   /* Almacener en una constante el llamado a la url de la ApiDogs                         */
    const filterArray = cleanArray(urlDogs);        /* En una constante llamo a la funcion previamente creada para limpiar el array         */
    return filterArray;                             /* y le paso la url, para luego retornar la data con las propiedades que necesito       */                                         

};


const dataDBase = async () => {

    const Dogs = await Dog.findAll({
        include: {
            model: Temperament,
            attributes: ['name'],
            through: {
                attributes: [],
            },
        }
    })

    const cleanDogs = Dogs.map((dogs) => {
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

    return cleanDogs;

};


const AllDogs = async () => {

    const data_base = await dataDBase();
    const data_api = await dataAPI();
    const response = [ ...data_base, ...data_api ];
    return response;

};

//------------EXPORTACIONES------------

module.exports = {
    AllDogs,
};