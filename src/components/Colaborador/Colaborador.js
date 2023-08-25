import './Colaborador.css';
import { AiFillCloseCircle } from 'react-icons/ai'

const Colaborador = (props) => {

  //Desestructuracion
  const { nombre, puesto, foto, equipo, id } = props.datos;
  const { colorPrincipal, eliminarColaborador} = props;

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
      </div>
    </div>
  );
};

export default Colaborador;
