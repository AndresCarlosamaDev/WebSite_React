import Colaborador from "../Colaborador/Colaborador";
import "./Equipo.css";

const Equipo = (props) => {
  //Destructuracion
  const { colorPrincipal, colorSecundario, titulo } = props.datos;
  const { colaboradores } = props;
  //Asignacion
  const colorTitulo = { borderColor: colorPrincipal }

  return <>
    {
      colaboradores.length > 0 &&
      <section className="equipo" style={{ backgroundColor: colorSecundario }}>
      <h3 className="title-equipo" style={colorTitulo}>
        {titulo}
      </h3>
      <div className="colaboradores">
        {
          props.colaboradores.map((colaborador, index) => <Colaborador
          datos={colaborador}
          key={index}
          colorPrincipal={colorPrincipal}
          />)
        }
      </div>
    </section>
    }
  </>
};

export default Equipo;
