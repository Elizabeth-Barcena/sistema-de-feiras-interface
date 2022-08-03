
import styles from './MostrarFeiras.module.css'
import{useEffect,useState} from "react"
import { FcPlus, FcRefresh, FcFullTrash,FcSearch} from "react-icons/fc";
import { TiTrash } from "react-icons/tb";
import Table from 'react-bootstrap/Table';

function MostrarFeiras(){
    const[feiras,CadastroFeira]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:4000/feiras', {method: 'GET'})
        .then(response=> response.json())
        .then(data => CadastroFeira(data))
        .catch(error=>{console.log(error.response)})

    },[])
console.log(feiras);

return <div className={styles.container}> 
       <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome da feira</th>
          <th>Local da feira</th>
          <th>Data da feira</th>
          <th> </th>
          <th> </th>
          <th> </th>
          <th> </th>               
        </tr>
      </thead>
      <tbody>
      {
                feiras.map(({id, nome, local, data})=>{
                    return <tr key={id}>
                        <td> {id}</td>
                        <td> {nome}</td>
                        <td> {local}</td>
                        <td> {data}</td>
                        <td>
                            <button>
                            <FcPlus size={25}/>
                            </button>
                        </td>
                        <td>  
                            <button >
                            <TiTrash size={25} />
                            </button>
                        </td>
                        <td>  
                            <button >
                            <FcRefresh size={25}/>
                            </button>
                        </td>
                        <td>  
                            <button >
                            <FcSearch size={25}/>
                            </button>
                        </td>
                        
                    </tr>
                })

                }
      </tbody>
    </Table>

</div>
        
         
       
    }

export default MostrarFeiras