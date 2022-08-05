import {Link} from 'react-router-dom'
import Container from './Container'
import styles from './Navbar.module.css'
import logo from '../../img/Logo.png'
import {  MdSettingsPhone } from "react-icons/md";
import { BsCart4 } from "react-icons/bs";
import { FaHome } from "react-icons/fa";


function Navbar(){
    return(
        <div>

            <nav className={styles.navbar}>
                        <Container>
                        <Link to="/">
                            <img src={logo} alt="Sicredi"/>
                        </Link>
                            <ul class={styles.list}>
                                <li class={styles.item}>
                                    <Link to="/Contact">
                                        <div div style={{color: 'white', outline: 0 } }>
                                            <MdSettingsPhone size={25}/>
                                        </div></Link> 
                                </li>
                            </ul>
                        </Container>   
                        
                    </nav>

       <nav className={styles.header}>
            <Container>
                <ul class={styles.list}>
                    <li class={styles.item}>
                        <Link to="/">
                        <div div style={{color: 'white', outline: 0 } }>
                                <FaHome size={25}/>
                            </div>
                        </Link>
                    </li>
                    <li class={styles.item}>
                        <Link to="/GerenciarTarefas">
                        <div div style={{color: 'white', outline: 0 } }>
                                <p>Gerenciar feiras <BsCart4 size={25}/></p>
                            </div>
                        </Link>
                    </li>
                </ul>
            </Container>   
            
        </nav>
                    
        </div>
       
        
    )

}
export default Navbar