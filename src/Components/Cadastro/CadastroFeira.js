
import styles from './CadastroFeira.module.css'
import { useState } from 'react';
import axios from 'axios';


function CadastroFeira(){ 
    const[values, setValues] = useState();
    console.log(values);
    const handleChangeValues = (value) =>{
        setValues(prevValue => ({
            ...prevValue,
            [value.target.name]:value.target.value,
        }))
    }
    /*  function handleClickButton(){
        console.log(values);
         fetch("http://localhost:4000/feiras", {
            method: "POST",
            body: {
                name: values.name,
                local:values.local,
                data: values.data,
            },
            headers: {
                "Content-type": "application/json;"
                
            },mode: "cors"
            })

                }*/

     function handleClickButton(){
        console.log(values);
         axios.post("http://localhost:4000/feiras", {
            data: values.data,
            name: values.name,
            local: values.local,
        })
    }
    return (
        
        <div >
            <div className={styles.form_control}>
            <label htmlFor={"Name"}>{"Nome da feira"}:</label>
            <input
            type="text"
            text="Nome da feira"
            name="Nome"
            placeholder="Insira o nome da feira"
            onChange={handleChangeValues}
            />
            </div>

            <div className={styles.form_control}>
            <label htmlFor={"Local"}>{"Local da feira"}:</label>
            <input
            type="text"
            text="Local da feira"
            name="Local"
            placeholder="Insira o local da feira"
            onChange={handleChangeValues}
            />
            </div>

            <div className={styles.form_control}>
            <label htmlFor={"Data"}>{"Data da feira"}:</label>
            <input
            type="date"
            text="Data da feira"
            name="Data da feira"
            placeholder="Insira a data da feira"
            onChange={handleChangeValues}
            />
            </div>
         

            <button className={styles.btn} onClick={
                ()=> handleClickButton()}>Cadastrar
                </button>
         
        </div>
       
    ) 
    }

export default CadastroFeira