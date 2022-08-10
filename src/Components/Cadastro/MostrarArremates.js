import { useEffect, useState } from "react";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styles from "./MostrarFeiras.module.css";
import { BiEdit, BiSearch, BiTrash } from "react-icons/bi";
import { BiAddToQueue } from "react-icons/bi";


function MostrarArremates({ feiraId }) {
    const [arremate, setArremate] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:4000/Arremate/${feiraId}`, { method: "GET" })
            .then((response) => response.json())
            .then((data) => setArremate(data))
            .catch((error) => {
                console.log(error.response);
            });
    } );

    return (
        <div className={styles.container}>
            <div style={{ width: "100%" }}>
                <input style={{ width: "100%" }} />
            </div>
            <div>
                <TableContainer component={Paper}>
                    <Table
                        sx={{ minWidth: 90, minHeight: 90 }}
                        size="small"
                        aria-label="a dense table"
                    >
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
                                <TableCell align="right">
                                    Peso do lote
                                </TableCell>
                                <TableCell align="right">Comprador</TableCell>
                                <TableCell align="right">PrecoKg</TableCell>
                                <TableCell align="center">Ações</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {arremate.map((element) => (
                                <TableRow
                                    key={element.id}
                                    sx={{
                                        "&:last-child td, &:last-child th": {
                                            border: 0,
                                        },
                                    }}
                                >
                                    <TableCell component="th" scope="row">
                                        {element.id}
                                    </TableCell>
                                    <TableCell align="right">
                                        {element.lote}
                                    </TableCell>
                                    <TableCell align="right">
                                        {element.mangueira}
                                    </TableCell>
                                    <TableCell align="right">
                                        {element.produtor}
                                    </TableCell>
                                    <TableCell align="right">
                                        {element.sexo}
                                    </TableCell>
                                    <TableCell align="right">
                                        {element.categoria}
                                    </TableCell>
                                    <TableCell align="right">
                                        {element.cabecas}
                                    </TableCell>
                                    <TableCell align="right">
                                        {element.localidade}
                                    </TableCell>
                                    <TableCell align="right">
                                        {element.leiloeira}
                                    </TableCell>
                                    <TableCell align="right">
                                        {element.status}
                                    </TableCell>
                                    <TableCell align="right">
                                        {element.pesoLote} Kg
                                    </TableCell>
                                    <TableCell align="right">
                                        {element.comprador}
                                    </TableCell>
                                    <TableCell align="right">
                                        R$ {element.precoKg}
                                    </TableCell>
                                    <TableCell
                                        style={{ display: "flex" }}
                                        align="right"
                                    >
                                        <BiSearch
                                            style={{
                                                color: "green",
                                                outline: 0,
                                                border: "none",
                                                cursor: "pointer",
                                                backgroundColor: "white",
                                                margin: "10px",
                                            }}
                                            size={25}
                                        />

                                        <BiTrash
                                            style={{
                                                color: "green",
                                                outline: 0,
                                                border: "none",
                                                cursor: "pointer",
                                                backgroundColor: "white",
                                                margin: "10px",
                                            }}
                                            size={25}
                                        />

                                        <BiEdit
                                            style={{
                                                color: "green",
                                                outline: 0,
                                                cursor: "pointer",
                                                backgroundColor: "white",
                                                margin: "10px",
                                                border: "none",
                                            }}
                                            size={25}
                                        />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            <div >
                <BiAddToQueue
                    style={{
                        color: "green",
                        outline: 0,
                        cursor: "pointer",
                        backgroundColor: "white",
                        margin: "10px",
                        border: "none",
                    }}
                    size={25}
                />
            </div>
        </div>
    );
}

export default MostrarArremates;
