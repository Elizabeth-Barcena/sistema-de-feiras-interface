
import styles from './MostrarFeiras.module.css'
import{useEffect,useState} from "react"
import ButtonSmall from './ButtonSmall';

function MostrarFeiras(){
    const[feiras,CadastroFeira]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:4000/feiras', {method: 'GET'})
        .then(response=> response.json())
        .then(data => CadastroFeira(data))
        .catch(error=>{console.log(error.response)})

    },[])
console.log(feiras);

    const feira = () => {
        return feiras.map(item=>{
            return( 
                <div className={styles.left}>
                    <div className={styles.border}>
                    <div>{item.id}</div>
                    <div>{item.nome}</div>
                    <div>{item.local} </div>
                    <div>{item.data}</div>
                    
                </div>

                <div className={styles.right}><ButtonSmall to="/MostrarArremates" text="Arremates"/></div>


                </div>
                
                
           
            )
        })
    }
    return(
        <div className={styles.container}>{feira()}</div>
    )

}
export default MostrarFeiras