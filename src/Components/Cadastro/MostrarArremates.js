
import styles from './MostrarFeiras.module.css'
import{useEffect,useState} from "react"

function MostrarArremates(){
    const[Arremate, CadastroArremate]= useState([]);

    useEffect(()=>{
        
    fetch('http://localhost:4000/arremate', {method: 'GET'})
    .then(response=> response.json())
    .then(data => CadastroArremate(data))
    .catch(error=>{console.log(error.response)})

    },[])
console.log( Arremate);

    const arrem = () => {
        return Arremate.map(item=>{
            return( 
                <div className={styles.left}>
                    <div className={styles.border}>
                    <div>{item.id}</div>
                    <div>{item.lote}</div>
                    <div>{item.mangueira} </div>
                    <div>{item.produtor}</div>
                    <div>{item.sexo}</div>
                    <div>{item.categoria}</div>
                    <div>{item.dataNascimento}</div>
                    <div>{item.peso}</div>
                    <div>{item.cabecas}</div>
                    <div>{item.localidade}</div>
                    <div>{item.leiloeira}</div>
                    <div>{item.status}</div>
                    <div>{item.pesoLote}</div>
                    <div>{item.comprador}</div>
                    <div>{item.precoKg}</div>
                </div>

                </div>
                
                
           
            )
        })
    }
    return(
        <div className={styles.container}>{arrem()}</div>
    )

}
export default MostrarArremates