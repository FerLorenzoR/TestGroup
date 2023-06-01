import style from './form.module.css';


const Form = () => {
    
    return(
        <div className={style.formContainer} >
            <form className={style.form} >
                <div className={style.content} >
                    <label className={style.label} >Name: </label>
                    <input className={style.input} />
                </div>

                <div className={style.content} >
                    <label className={style.label} >Name: </label>
                    <input className={style.input} />
                </div>
            </form>
        </div>
    );

};

export default Form;