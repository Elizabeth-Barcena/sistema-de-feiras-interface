import CadastroFeira from '../Cadastro/CadastroFeira'
import styles from './Feiras.module.css'


function Feiras(){
    return(
       <div className={styles.feiras_container}>
        <CadastroFeira  btnText="Criar feira"/>
        
       </div>
    )
}
export default Feiras