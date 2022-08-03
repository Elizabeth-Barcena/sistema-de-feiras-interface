
import styles from './CadastroFeira.module.css'
import { useState } from 'react';

//import axios from 'axios'

function CadastroFeira(){ 
    const[values, setValues] = useState();
    console.log(values);
    const handleChangeValues = (value) =>{
        setValues(prevValue => ({
            ...prevValue,
            [value.target.name]:value.target.value,
        }))
    }

    const requestOptions={
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
            'Content-type': 'application/json'
        }
    }
    const url="http://localhost:4000/feiras"

     function handleClickButton(){
        console.log("valores",values);
         fetch(url, requestOptions)
         .then(console.log("Gravado"))
         .catch(erro=> console.log(erro));

                }

  /*   function handleClickButton(){
        console.log(values);
         axios.post(url, requestOptions).then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }*/
    return (
        
        <div >
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
                ()=> handleClickButton()}>Cadastrar
                </button>
         
        </div>
       
    ) 
    }

export default CadastroFeira