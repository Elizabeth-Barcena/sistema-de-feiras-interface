function Evento(){
    function meuevento(){
        console.log("Ativado")
    }
    return(
        <div>
            <p> Clique para disparar um Evento: </p>
            <button onClick={meuevento}> Ativar! </button>
        </div>
    )
}
export default Evento