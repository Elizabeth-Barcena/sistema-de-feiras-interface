
import styles from './Home.module.css'
import savings from '../../img/gado.jpg'
import LinkButton from '../layout/LinkButton'


function Home(){

    return(
        <section className={styles.home_container}>
            <div className={styles.left}>
                <div className={styles.LinkButton}>
                   <LinkButton to="/Feiras" text="Cadastrar feiras" /> 
                    <LinkButton to="/GerenciarTarefas" text="Gerenciar feiras" />
                </div>
                
            </div>
           
            <div className={styles.right}>
                <h1 className={styles.right}>Bem-vindo ao sistema de feira do Sicredi </h1>
               <img src={savings} alt="Sicredi"/>' 
            </div>
             
  
        </section>

             )
    	}


export default Home;