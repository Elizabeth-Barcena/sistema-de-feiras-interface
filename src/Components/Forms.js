function Forms(){
    function cadastrarfeira(e){
        e.preventDefault()
        console.log("Cadastrou o usuario!")
    }

    return(
        <div>
            <h1> Meu cadastro: </h1>
            <form onSubmit={cadastrarfeira}>
                <div>
                    <input type="text" placeholder="Digite o seu nome" />

                </div>
                <div>
                    <input type="submit" value="Cadastro de feira"/>
                </div>
            </form>
        </div>

    )
}
export default Forms