
import styles from './MostrarFeiras.module.css'
import{useEffect,useState} from "react"
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { BiEdit ,BiTrash} from "react-icons/bi";
import { VscFileSubmodule } from "react-icons/vsc";

function MostrarFeiras(){
    const [initialRepos, setInitialRespo]= useState([]);
    const[repos, setRepos]= useState([]);
    
   
    useEffect(()=> {
        const fetchRespos=async ()=>{
            try{
                const response =await fetch('http://localhost:4000/feiras');
                const data= await response.json();
                setInitialRespo(data);
                setRepos(data);
        }catch(error){
            console.log(error);
        }
    }
    fetchRespos();
},[]);

    const handleChange= ({target}) =>{
        if(!target.value){
            setRepos(initialRepos);
            return
        }
        const filterRepos = repos.filter(({nome}) => nome.includes(target.value))
        setRepos(filterRepos);
    }


return (
    <div className={styles.container}>
        <input
            placeholder='Pesquisar nome da feira'
            onChange={handleChange}
        />
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Nome da feira</TableCell>
            <TableCell align="right">Local da feira</TableCell>
            <TableCell align="right">Data da feira</TableCell>
            <TableCell align="right">Editar</TableCell>
            <TableCell align="right">Excluir</TableCell>
            <TableCell align="right">Arremates</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {repos.map(({id, nome, local, data}) => (
            <TableRow
              key={repos.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {id}
              </TableCell>
              <TableCell align="right">{nome}</TableCell>
              <TableCell align="right">{local}</TableCell>
              <TableCell align="right">{data}</TableCell>
            <TableCell align="right">
                            <button>
                            <div style={{color: 'green', outline: 0 } }>
                            <BiEdit size={25}/>
                            </div>
                            </button>
            </TableCell>
            <TableCell align="right">
                            <button>
                            <div style={{color: 'green', outline: 0 } }>
                            <BiTrash size={25}/>
                            </div>
                            </button>
            </TableCell>
            <TableCell align="right">
                            <button to="/MostrarArremates">
                            <div style={{color: 'green', outline: 0 } }>
                            <VscFileSubmodule size={25}/>
                            </div>
                            </button>
            </TableCell>
            
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
 
    </div>
    ); 

}


export default MostrarFeiras