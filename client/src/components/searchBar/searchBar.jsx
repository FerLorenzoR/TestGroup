import style from './searchBar.module.css';


const SearchBar = () => {

    return (
        <div className={style.searchbarContainer} >
            <form>
                <input
                    type='text'
                    placeholder='enter dog...'
                    className={style.input} 
                />
                <button type='submit' className={style.button}  >
                    SEARCH
                </button>
            </form>
        </div>
    );

};

export default SearchBar;
