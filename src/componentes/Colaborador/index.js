import './Colaborador.css'


const Colaborador = (props) => {
    return (
        <div className='colaborador'>
            <div className='cabecalho' >
                <img src={props.imagem} alt={props.nome} />
            </div>

            <div className='rodape'>
                <h3> {props.nome} </h3>
                <h4> {props.cargo} </h4>                
            </div>

        </div>
    )
}

export default Colaborador