import styles from './Cartao.module.css'
function Cartao(props) {
    return(
        <div>
             <img src={props.foto} alt={props.foto} />
             <h2 className= {styles.nome}>{props.nome} </h2>
             <p className= {styles.profissao}>Profissão: {props.prof} </p>
             <p className= {styles.descricao}>{props.descr} </p>
        </div>
    )
}
export default Cartao;