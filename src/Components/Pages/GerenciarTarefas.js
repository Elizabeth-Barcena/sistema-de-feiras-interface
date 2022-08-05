
import styles from './GerenciarTarefas.module.css'
import CadastroFeira from '../Cadastro/CadastroFeira'
import MostrarFeiras from '../Cadastro/MostrarFeiras'
function GerenciarTarefas(){

    return(
        <section className={styles.container}>
            <div className={styles.left}>   
                <div className={styles.LinkButton}>
                    <CadastroFeira  btnText="Criar feira"/>
                </div>
                
            </div>
            <div className={styles.right}>
            <div className={styles.alter}>
                <h1>Tabela</h1>
            </div>
            <div className={styles.LinkButton} >
                     <MostrarFeiras  btnText="Criar feira"/>
            </div>
             
            </div>
        </section>

    )
}

export default GerenciarTarefas