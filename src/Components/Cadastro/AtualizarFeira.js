import styles from './CadastroFeira.module.css'
import { useState } from 'react';

//import axios from 'axios'

function AtualizarFeira(feiraId){ 

    const[values, setValues] = useState();
    console.log(values);

    const handleChangeValues = (value) =>{
        setValues(prevValue => ({
            ...prevValue,
            [value.target.name]:value.target.value,
        }))
    }

    const requestOptions={
        method: 'PUT',
        body: JSON.stringify(values),
        headers: {
            'Content-type': 'application/json'
        }
    }
    const url=`http://localhost:4000/feiras/${feiraId}`

     function handleClickButton(){
        console.log("valores",{values});
         fetch(url, requestOptions)
         .then(teste => console.log(teste))
         .catch(erro=> console.log(erro));

                }

    return (
        
        <div className={styles.form_control}>
            <div className={styles.form_control}>
            <label htmlFor={"Name"}>{"Nome da feira"}:</label>
            <input
            type="text"
            text="Nome da feira"
            name="nome"
            placeholder="Insira o nome da feira"
            onChange={handleChangeValues}
            />
            </div>

            <div className={styles.form_control}>
            <label htmlFor={"Local"}>{"Local da feira"}:</label>
            <input
            type="text"
            text="Local da feira"
            name="local"
            placeholder="Insira o local da feira"
            onChange={handleChangeValues}
            />
            </div>

            <div className={styles.form_control}>
            <label htmlFor={"Data"}>{"Data da feira"}:</label>
            <input
            type="date"
            text="Data da feira"
            name="data"
            placeholder="Insira a data da feira"
            onChange={handleChangeValues}
            />
            </div>
         

            <button className={styles.btn} onClick={
                ()=> handleClickButton()}>Atualizar
                </button>
         
        </div>
       
    ) 
    }

export default AtualizarFeira