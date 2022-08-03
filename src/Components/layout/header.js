import styles from './Container.module.css'
import {Link} from 'react-router-dom'
import { MdOutlineAppRegistration} from "react-icons/md";
import { BiSearchAlt } from "react-icons/bi";
function Header(){

    return(
        <div className={styles.header}>
                <ul class={styles.list}>
                    <li class={styles.item}>
                        <Link to="/CadastroFeira">
                        <div div style={{color: 'green', outline: 0 } }>
                                <MdOutlineAppRegistration size={25}/>
                            </div>
                        </Link>
                    </li>
                    <li class={styles.item}>
                        <Link to="/Mostrarfeiras">
                        <div div style={{color: 'green', outline: 0 } }>
                                <BiSearchAlt size={25}/>

                            </div>
                        </Link>
                    </li>
                </ul> 
        </div>
    )
}
export default Header