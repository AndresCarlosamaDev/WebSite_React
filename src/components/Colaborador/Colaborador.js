import './Colaborador.css';
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

const Colaborador = (props) => {

  //Desestructuracion
  const { nombre, puesto, foto, equipo, id, fav } = props.datos;
  const { colorPrincipal, eliminarColaborador, like} = props;

  return (
    <div className="colaborador">
      <AiFillCloseCircle className='eliminarBtn' onClick={() => eliminarColaborador(id)} />
      <div className="encabezado" style={{ backgroundColor: colorPrincipal }}>
        <img
          src={foto}
          alt={nombre}
        />
      </div>
      <div className="info">
        <h4>{nombre}</h4>
        <h5>{puesto}</h5>
        { fav === true ? <AiFillHeart color='red' onClick={() => like(id)}/> : <AiOutlineHeart onClick={() => like(id)}/>}
      </div>
    </div>
  );
};

export default Colaborador;
