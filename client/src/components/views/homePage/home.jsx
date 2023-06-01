import style from './home.module.css';
import CardsContainer from '../../cardsContainer/cardsContainer';


const Home = () => {
    
    return(
        <div className={style.homeContainer} >
            <CardsContainer/>
        </div>
    );

};

export default Home;