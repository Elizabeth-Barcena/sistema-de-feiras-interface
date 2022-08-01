import { Link } from 'react-router-dom'
import styles from './ButtonSmall.module.css'

function ButtonSmall({to,text}){
    console.log(to);
    return(
        <Link className={styles.btn} to={to}>
        {text}
        </Link>)
}
export default ButtonSmall