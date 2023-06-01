import style from './landing.module.css';
import { Link } from 'react-router-dom'


const Landing = () => {
    
    return(

        <div className={style.landingContainer} >
            <div className={style.landingContent} >
                <h1 className={style.title} > WELCOME TO MY DOG API </h1>
                <p className={style.p} >
                    ENTER TO DISCOVER ALL OUR CANINE FRIENDS, 
                    WHO HAVE SUPPORTED US AS MAN'S BEST FRIEND 
                    SINCE THE PAST
                </p>
                <Link to='/home' >
                    <button className={style.button} > ENTER </button>
                </Link>
            </div>
        </div>

    );

};

export default Landing;