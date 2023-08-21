import './Colaborador.css'

const Colaborador = (props) => {

  //Desestructuracion
  const { nombre, puesto, foto, equipo } = props.datos;
  const { colorPrincipal } = props;

  return (
    <div className="colaborador">
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
