
import styles from './Home.module.css'
import savings from '../../img/gado.jpg'



function Home(){

    return(
        <section className={styles.home_container}>
           
            <div className={styles.right}>
                <h1 className={styles.right}>Bem-vindo ao sistema de feira do Sicredi </h1>
               <img src={savings} alt="Sicredi"/>' 
            </div>
             
        </section>

             )
    	}


export default Home;