
import MostrarArremates from "../Cadastro/MostrarArremates"
import styles from "./Arremate.module.css"
import {useLocation} from 'react-router-dom'
import {useMemo} from "react";

function useQuery() {
    const { search } = useLocation();
  
    return useMemo(() => new URLSearchParams(search), [search]);
  }
  

  
  function Arremate(){
      const query = useQuery()

      console.log('query: ',query.get('feiraId'))
      
    return(
        <section className={styles.container}>
            <div className={styles.right}>
            <div className={styles.alter}>
                <h1>Tabela</h1>
            </div>
            <div className={styles.LinkButton}>
                     <MostrarArremates feiraId={query.get('feiraId')}/>
                </div>
            </div>
            

        </section>
    )

}

export default Arremate