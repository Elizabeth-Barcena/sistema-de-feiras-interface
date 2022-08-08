import { Link } from 'react-router-dom'
import styles from './botao.module.css'

function botao({to,text}){
    console.log(to);
    return(
        <Link className={styles.bnt} to={to}>
        {text}
        </Link>)
}
export default botao