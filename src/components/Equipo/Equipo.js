import Colaborador from "../Colaborador/Colaborador";
import "./Equipo.css";
import hexToRgba from 'hex-to-rgba';

const Equipo = (props) => {
  //Destructuracion
  const { colorPrincipal, colorSecundario, titulo, id } = props.datos;
  const { colaboradores, eliminarColaborador, actualizarColor, like} = props;
  //Asignacion
  const colorTitulo = { borderColor: colorPrincipal }

  return <>
    {
      colaboradores.length > 0 &&
      <section className="equipo" style={{ backgroundColor: hexToRgba(colorPrincipal, 0.6) }}>
        <input
        type="color"
        className="input-color"
        value={colorPrincipal}

        //Border input-color
        style={{ backgroundColor: colorSecundario }}
        onChange={(event) => {
          actualizarColor(event.target.value, id)
        }}
        />
      <h3 className="title-equipo" style={colorTitulo}>
        {titulo}
      </h3>
      <div className="colaboradores">
        {
          props.colaboradores.map((colaborador, index) => <Colaborador
          datos={colaborador}
          key={index}
          colorPrincipal={colorPrincipal}
          eliminarColaborador={eliminarColaborador}
          like={like}
          />)
        }
      </div>
    </section>
    }
  </>
};

export default Equipo;
