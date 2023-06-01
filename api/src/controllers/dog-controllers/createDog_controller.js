//------------IMPORTACIONES------------

const { Dog, Temperament } = require ('../../db');
const { AllTemperaments } = require ('../../controllers/temperament-controllers/allTemperament');

//--------------CONTROLLER-------------

const createDog = async ( name, image, weight, height, life_span, temperament ) => {

    const newDog = await Dog.create({ name, image, weight, height, life_span });
    
    const Tcount = await Temperament.count();
    if (Tcount === 0) {
        await AllTemperaments();
    };

    const Tfound = [];
    for (let i = 0; i < temperament.length; i++) {
        const Found = await Temperament.findOne({
            where: {
                name: temperament[i]
            }
        });

        if (!Found) {
            throw Error('This temperament not exist');
        };

        Tfound.push(Found)
    };

    await newDog.addTemperament(Tfound);
    return newDog;

}

//------------EXPORTACIONES------------

module.exports = {
    createDog,
};