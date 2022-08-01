
import styles from './CadastroArremate.module.css'
import Input from '../Form/Input'
import LinkButton from '../layout/LinkButton'
import Select from '../Form/Select'

function CadastroArremate({btnText}){
    

    return (
            <div className={styles.form}>
                <div className={styles.div}>
                <Input
                    type="number"
                    text="Lote"
                    name="Lote"
                    placeholder="Insira o lote"
                />   
                <Input
                    type="text"
                    text="Mangueira"
                    name="Mangueira"
                    placeholder="Insira a mangueira"
                    />
                   
                    <Input
                    type="text"
                    text="Produtor"
                    name="Nome do produtor"
                    placeholder="Insira o nome do produtor"
                    />  
                </div>  
                <div className={styles.div}>
                 <Select 
                    name="Sexo"
                    text="Sexo "
                    dados={['Femea', 'Macho']}
                    />
                   
                     <Select
                    name="Categoria"
                    text="Categoria"
                    dados={['Terneiros inteiros', 'Terneiras','vaquilhonas',
                    'Novilhos 26-36 meses','Novilhos +36 meses', 
                    'Novilhas 12 a 24 meses','Novilhas +36meses',
                    'novilhas 2d com cria','Vacas com cria','Vacas de invernar']}    
                     /> 
                    <Input
                    type="Date"
                    text="Data de nascimento"
                    name="Data de nascimento"
                    placeholder="Insira a data de nascimento"
                    />
                   
                     </div> 
                     <div className={styles.div}>
                        <Input
                        type="Number"
                        text="Peso"
                        name="Peso"
                        placeholder="Insira o peso"
                         />
                        <Input
                        type="Number"
                        text="Cabeças"
                        name="Cabeças"
                        placeholder="Insira as cabeças"
                        />
            
     
                        <Input
                        type="text"
                        text="Localidade"
                        name="Localidade"
                        placeholder="Insira a localidade"
                        />
                       
                        </div> 
                        
                         <div className={styles.div}>
                        <Select
                        name="Status"
                        text="Status"
                        dados={['Vendido', 'Não-vendido', 'Leiloando']}
                        /> 
                            <Input
                   
                            type="Number"
                            text="Peso Lote"
                            name="Peso Lote"
                            placeholder="Insira o peso do lote"
                            />             
                            <Input
                            type="text"
                            text="Comprador"
                            name="Comprador"
                            placeholder="Insira o nome do comprador"
                    />

                            </div>  
                            <div className={styles.form2}>
                                <LinkButton to="/Home" text="Criar" />  
                            </div>
                  
             
             </div>
    )
}
export default CadastroArremate