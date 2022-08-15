import styles from './Feiras.module.css'
import MostrarFeiras from '../Cadastro/MostrarFeiras';
import AtualizarFeira from '../Cadastro/AtualizarFeira';
import {useLocation} from 'react-router-dom'
import {useMemo} from "react";

function useQuery() {
    const { search } = useLocation();
  
    return useMemo(() => new URLSearchParams(search), [search]);
  }

function AtualizaFeiras(){
    const query = useQuery()

      console.log('query: ',query.get('id'))
    return (
        <section className={styles.container}>
          <div className={styles.left}>
            <div className={styles.LinkButton}>
            <AtualizarFeira id={query.get('id')}/> 
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
export default AtualizaFeiras
//  