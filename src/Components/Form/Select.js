
import styles from './Input.module.css'

function Select({ text,name, options, dados,handleOnChange }){

    return(
        <div className={styles.form_control}>
        <label htmlFor={name}>{text}:</label>
        <select name={name} value={name} options={options}>
           {dados.map((item) => <option key={item}>{item}</option> )}
        </select>
        </div>
    )
}
export default Select