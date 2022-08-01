
import styles from './GerenciarTarefas.module.css'
import LinkButton from '../layout/LinkButton'

function GerenciarTarefas(){

    return(
        <section className={styles.container}>
            <div className={styles.left}>
                <div className={styles.LinkButton}>
                   <LinkButton to="/MostrarFeiras" text="Ver todas as feiras" /> 
                    <LinkButton to="/Home" text="Atualizar feiras" />
                </div>
                
            </div>
            <div className={styles.right}>
            <div className={styles.LinkButton}>
                   <LinkButton to="/Home" text="Excluir feiras" /> 
                    <LinkButton to="/Home" text="Buscar feiras" />
            </div>
             
            </div>
        </section>

    )
}

export default GerenciarTarefas