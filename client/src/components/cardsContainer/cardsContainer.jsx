import style from './cardsContainer.module.css';
import Card from '../card/card'


const CardsContainer = () => {

    const dogs = [
        {
            "id": 1,
            "name": "Affenpinscher",
            "image": "https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg",
            "weight": "3 - 6",
            "height": "23 - 29",
            "life_span": "10 - 12 years",
            "temperament": "Stubborn, Curious, Playful, Adventurous, Active, Fun-loving",
            "created": false
        },
        {
            "id": 2,
            "name": "Afghan Hound",
            "image": "https://cdn2.thedogapi.com/images/hMyT4CDXR.jpg",
            "weight": "23 - 27",
            "height": "64 - 69",
            "life_span": "10 - 13 years",
            "temperament": "Aloof, Clownish, Dignified, Independent, Happy",
            "created": false
        },
        {
            "id": 3,
            "name": "African Hunting Dog",
            "image": "https://cdn2.thedogapi.com/images/rkiByec47.jpg",
            "weight": "20 - 30",
            "height": "76",
            "life_span": "11 years",
            "temperament": "Wild, Hardworking, Dutiful",
            "created": false
        },
        {
            "id": 4,
            "name": "Airedale Terrier",
            "image": "https://cdn2.thedogapi.com/images/1-7cgoZSh.jpg",
            "weight": "18 - 29",
            "height": "53 - 58",
            "life_span": "10 - 13 years",
            "temperament": "Outgoing, Friendly, Alert, Confident, Intelligent, Courageous",
            "created": false
        },
        {
            "id": 5,
            "name": "Akbash Dog",
            "image": "https://cdn2.thedogapi.com/images/26pHT3Qk7.jpg",
            "weight": "41 - 54",
            "height": "71 - 86",
            "life_span": "10 - 12 years",
            "temperament": "Loyal, Independent, Intelligent, Brave",
            "created": false
        },
        {
            "id": 6,
            "name": "Akita",
            "image": "https://cdn2.thedogapi.com/images/BFRYBufpm.jpg",
            "weight": "29 - 52",
            "height": "61 - 71",
            "life_span": "10 - 14 years",
            "temperament": "Docile, Alert, Responsive, Dignified, Composed, Friendly, Receptive, Faithful, Courageous",
            "created": false
        },
        {
            "id": 7,
            "name": "Alapaha Blue Blood Bulldog",
            "image": "https://cdn2.thedogapi.com/images/33mJ-V3RX.jpg",
            "weight": "25 - 41",
            "height": "46 - 61",
            "life_span": "12 - 13 years",
            "temperament": "Loving, Protective, Trainable, Dutiful, Responsible",
            "created": false
        },
        {
            "id": 8,
            "name": "Alaskan Husky",
            "image": "https://cdn2.thedogapi.com/images/-HgpNnGXl.jpg",
            "weight": "17 - 23",
            "height": "58 - 66",
            "life_span": "10 - 13 years",
            "temperament": "Friendly, Energetic, Loyal, Gentle, Confident",
            "created": false
        },
        {
            "id": 9,
            "name": "Alaskan Malamute",
            "image": "https://cdn2.thedogapi.com/images/dW5UucTIW.jpg",
            "weight": "29 - 45",
            "height": "58 - 64",
            "life_span": "12 - 15 years",
            "temperament": "Friendly, Affectionate, Devoted, Loyal, Dignified, Playful",
            "created": false
        }
    ]

    return (
        <div className={style.container} >
            { dogs.map( dog =>{
                return <Card
                    id={dog.id}
                    key={dog.id}
                    image={dog.image}
                    name={dog.name}
                />
            })}
        </div>
    );

};

export default CardsContainer;