import SearchBar from '../searchBar/searchBar';
import style from './navBar.module.css';
import { Link } from "react-router-dom"


const NavBar = () => {

    return (

        <div className={style.navbarContainer} >
                <Link to='/' >
            <div className={style.iconContainer} >
                <button className={style.icon} ></button>
            </div>
                </Link>

            <div className={style.buttonsContainer} >
                <Link to='/home' >
                <button className={style.button} >
                    HOME
                </button>
                </Link>

                <Link to='/form' >
                <button className={style.button} >
                    FORM
                </button>
                </Link>
            </div>

            <div className={style.searchbarContainer} >
                <SearchBar/>
            </div>
        </div>

    );

};

export default NavBar;