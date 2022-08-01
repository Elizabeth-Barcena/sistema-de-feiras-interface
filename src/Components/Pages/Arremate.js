import CadastroArremate from "../Cadastro/CadastroArremate"
import style from "./Arremate.module.css"
function Arremate(){
    return(
        <div className={style.Arremate}>
            <h1> Arremates </h1> 
            <CadastroArremate btnText="Criar arremate"/>
        </div>
    )
}

export default Arremate