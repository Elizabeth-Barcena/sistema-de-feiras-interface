import {Link} from 'react-router-dom'
import Container from './Container'
import styles from './Navbar.module.css'
import logo from '../../img/Logo.png'

function Navbar(){
    return(
        <nav className={styles.navbar}>
            <Container>
            <Link to="/">
                <img src={logo} alt="Sicredi"/>
            </Link>
                <ul class={styles.list}>
                    <li class={styles.item}>
                        <Link to="/">Home</Link>
                    </li>
                    <li class={styles.item}>
                        <Link to="/Feiras">Feiras</Link>
                    </li>
                    <li class={styles.item}>
                        <Link to="/Contact">Contato</Link> 
                    </li>
                </ul>
            </Container>   
        </nav>
    )

}
export default Navbar