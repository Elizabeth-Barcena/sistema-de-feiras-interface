import { MdSettingsPhone } from "react-icons/md";
import styles from './Contact.module.css'
function Contact(){
    return(
        <div style={styles.Contact}>
            <div style={{color: 'green', outline: 0 } }>
                         <p><MdSettingsPhone size={25}/> Telefone: (53) 3211-0350 </p>   
            </div>

        </div>
    )
}

export default Contact