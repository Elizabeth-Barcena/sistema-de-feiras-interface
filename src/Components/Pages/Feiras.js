import CadastroFeira from '../Cadastro/CadastroFeira'
import styles from './Feiras.module.css'
import MostrarFeiras from '../Cadastro/MostrarFeiras';

function Feiras(){
    return (
        <section className={styles.container}>
          <div className={styles.left}>
            <div className={styles.LinkButton}>
              <CadastroFeira/>
            </div>
    
          </div>
          <div className={styles.right}>
            <div className={styles.alter}>
              <h1>Tabela</h1>
            </div>
            <div className={styles.LinkButton}>
              <MostrarFeiras/>
            </div>
    
          </div>
        </section>
    
      );
    }
export default Feiras
//
//