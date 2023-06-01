import style from './card.module.css';

const Card = (props) => {

    return (
        <div className={style.card}>
            <div className={style.imgContainer}>
                <img src={props.image} alt='Not found' className={style.img} />
            </div>
            <div className={style.nameOverlay}>
                {props.name}
            </div>
        </div>
    );

};

export default Card;
