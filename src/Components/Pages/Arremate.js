
import MostrarArremates from "../Cadastro/MostrarArremates"
import styles from "./Arremate.module.css"
import {Link,useLocation} from 'react-router-dom'
import { BiAddToQueue } from "react-icons/bi";
import {useMemo} from "react";

function useQuery() {
    const { search } = useLocation();
  
    return useMemo(() => new URLSearchParams(search), [search]);
  }
  

  
  function Arremate(){
      const query = useQuery()

      console.log('query: ',query.get('idFeira'))
      
    return(
        <section className={styles.container}>
            <div className={styles.right}>
            <div className={styles.alter}>
                <h1>Tabela</h1>
            </div>
            <div className={styles.LinkButton}>
                     <MostrarArremates idFeira={query.get('idFeira')}/>
                </div>
            </div>
            <Link to="/CadastroArremate"> 
            <div style={{color: 'green', outline: 0 } }>
                 <BiAddToQueue size={25}/>
            </div></Link>

        </section>
    )

}

export default Arremate