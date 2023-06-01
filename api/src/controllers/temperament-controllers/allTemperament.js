//------------IMPORTACIONES------------

const { Temperament } = require ('../../db');
const axios = require ('axios');
const { DB_URL } = process.env;

//--------------CONTROLLER-------------

const AllTemperaments = async () => {

    const urlTemperaments = await axios.get(`${DB_URL}`);

    let temperaments = urlTemperaments.data
        .map((d) => 
            (d.temperament 
            ? d.temperament 
            : 'Not Info'))
        .map((d) => d?.split(", "));

    let oneTemperament = [...new Set(temperaments.flat())];
    oneTemperament.forEach((e) => {
        if (e) {
            Temperament.findOrCreate({
                where: {
                    name: e
                }
            });
        };
    });
    oneTemperament = await Temperament.findAll();

    return oneTemperament;

};

//------------EXPORTACIONES------------

module.exports = {
    AllTemperaments,
};