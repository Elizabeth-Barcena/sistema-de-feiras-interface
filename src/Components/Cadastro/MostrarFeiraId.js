import { useEffect, useState } from "react";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { BiEdit, BiTrash } from "react-icons/bi";
import { VscFileSubmodule } from "react-icons/vsc";
import { Link } from "react-router-dom";
import styles from "./MostrarFeiras.module.css";

function MostrarFeiraId() {
    const [initialRepos, setInitialRespo] = useState([]);
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        const fetchRespos = async () => {
            try {
                const response = await fetch("http://localhost:4000/feiras/${feiraId}");
                const data = await response.json();
                setInitialRespo(data);
                setRepos(data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchRespos();
    }, []);

    const handleChange = ({ target }) => {
        if (!target.value) {
            setRepos(initialRepos);
            return;
        }
        const filterRepos = repos.filter(({ nome }) =>
            nome.includes(target.value)
        );
        setRepos(filterRepos);
    };

    function retornaData(data) {
     

        return data;
    }

    return (
        <div className={styles.container}>
            <input
                placeholder="Pesquisar nome da feira"
                onChange={handleChange}
            />
            <TableContainer component={Paper}>
                <Table
                    sx={{ minWidth: 90, minHeight: 90 }}
                    size="small"
                    aria-label="a dense table"
                >
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell align="right">Nome da feira</TableCell>
                            <TableCell align="right">Local da feira</TableCell>
                            <TableCell align="right">Data da feira</TableCell>
                            <TableCell align="center">Ações</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {repos.map((repo) => (
                            <TableRow
                                key={repo.id}
                                sx={{
                                    "&:last-child td, &:last-child th": {
                                        border: 0,
                                    },
                                }}
                            >
                                <TableCell component="th" scope="row">
                                    {repo.BiTrashid}
                                </TableCell>
                                <TableCell align="right">{repo.nome}</TableCell>
                                <TableCell align="right">{repo.local}</TableCell>
                                <TableCell align="right">
                                    {retornaData(repo.data)}
                                </TableCell>
                                <TableCell
                                    style={{ display: "flex" }}
                                    align="right"
                                >
                                    <Link to={`/Arremate?feiraId=${repo.id}`}>
                                        <VscFileSubmodule
                                            style={{
                                                color: "green",
                                                outline: 0,
                                                border: "none",
                                                cursor: "pointer",
                                                backgroundColor: "white",
                                                margin: "10px"
                                            }}
                                            size={25}
                                        />
                                    </Link>

                                    <Link to={`/Arremate?feiraId=${repo.id}`}>
                                        <BiTrash
                                            style={{
                                                color: "green",
                                                outline: 0,
                                                border: "none",
                                                cursor: "pointer",
                                                backgroundColor: "white",
                                                margin: "10px"
                                            }}
                                            size={25}
                                        />
                                    </Link>

                                    <Link to="/AtualizaFeiras">
                                        <BiEdit
                                            style={{
                                                color: "green",
                                                outline: 0,
                                                cursor: "pointer",
                                                backgroundColor: "white",
                                                margin: "10px",
                                                border:"none"
                                            }}
                                            size={25}
                                        />
                                    </Link>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default MostrarFeiraId;
