
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
import { BiEdit } from "react-icons/bi";
function MostrarArremates({idFeira}){
    const[Arremate, CadastroArremate]= useState([]);

    useEffect(()=>{
        
    fetch(`http://localhost:4000/arremate/${idFeira}`, {method: 'GET'})
    .then(response=> response.json())
    .then(data => CadastroArremate(data))
    .catch(error=>{console.log(error.response)})

    },[])
console.log( Arremate);

        return(
            <div className={styles.container}>
                <input/>
                <TableContainer component={Paper}>
                <Table sx={{ minWidth: 90, minHeight: 90 }} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell align="right">Lote</TableCell>
                    <TableCell align="right">Mangueira</TableCell>
                    <TableCell align="right">Produtor(g)</TableCell>
                    <TableCell align="right">Sexo</TableCell>
                    <TableCell align="right">Categoria</TableCell>
                    <TableCell align="right">Cabeças</TableCell>
                    <TableCell align="right">Localidade</TableCell>
                    <TableCell align="right">Leiloeira</TableCell>
                    <TableCell align="right">Status</TableCell>
                    <TableCell align="right">Peso do lote</TableCell>
                    <TableCell align="right">Comprador</TableCell>
                    <TableCell align="right">PrecoKg</TableCell>
                    <TableCell align="right">Id da feira</TableCell>
                    <TableCell align="right">Editar</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {Arremate.map(({id,lote, mangueira, produtor, sexo, categoria, cabecas, localidade, leiloeira, status, pesoLote, comprador, precoKg, feiraId}) => (
                    <TableRow
                        key={Arremate.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                        {id}
                        </TableCell>
                        <TableCell align="right">{lote}</TableCell>
                        <TableCell align="right">{mangueira}</TableCell>
                        <TableCell align="right">{produtor}</TableCell>
                        <TableCell align="right">{sexo}</TableCell>
                        <TableCell align="right">{categoria}</TableCell>
                        <TableCell align="right">{cabecas}</TableCell>
                        <TableCell align="right">{localidade}</TableCell>
                        <TableCell align="right">{leiloeira}</TableCell>
                        <TableCell align="right">{status}</TableCell>
                        <TableCell align="right">{pesoLote}</TableCell>
                        <TableCell align="right">{comprador}</TableCell>
                        <TableCell align="right">{precoKg}</TableCell>
                        <TableCell align="right">{feiraId}</TableCell>
                        <TableCell align="right">
                            <button>
                            <div style={{color: 'green', outline: 0 } }>
                            <BiEdit size={25}/>
                            </div>
                            </button></TableCell>

                    </TableRow>
                    ))}
                </TableBody>
                </Table>
                </TableContainer>
    </div>);
      /*  return Arremate.map(item=>{
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
    )*/
    }

export default MostrarArremates