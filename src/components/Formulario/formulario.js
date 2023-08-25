import { useState } from "react";
import "./formulario.css";
import InputTexto from "../InputTexto/InputTexto";
import ListaOpciones from "../ListaOpciones/ListaOpciones";
import Boton from "../Boton/Boton";

const Formulario = (props) => {
  //funtion - recoleccion de datos
  const manejoEvento = (e) => {
    e.preventDefault();
    // console.log(e.target);
    let datosAEnviar = {
      nombre, puesto, foto, equipo
    }
    props.agregarColaborador(datosAEnviar);
  };

  //funcion - crear equipo
    const manejoColorEquipo = (e) => {
      e.preventDefault();
      props.crearEquipo({titulo:nombreEquipo, colorPrincipal:colorEquipo})
  }


  //Estados F1
  const [nombre, actualizarNombre] = useState("");
  const [puesto, actualizarPuesto] = useState("");
  const [foto, actualizarFoto] = useState("");
  const [equipo, actualizarEquipo] = useState("");

  //Estados F2
  const [nombreEquipo, actualizarNombreEquipo] = useState("");
  const [colorEquipo, actualizarColor] = useState("");



  // const actualizarValor = (e) => {
  //   actualizarNombre(e.target.value);
  // };

  return (
    <section className="formulario">
      <form onSubmit={manejoEvento}>
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <InputTexto
          titulo="Nombre"
          placeholder="Ingresar nombre"
          required
          valor={nombre}
          actualizarValor={actualizarNombre}
        />
        <InputTexto
          titulo="Puesto"
          placeholder="Ingresar puesto"
          required
          valor={puesto}
          actualizarValor={actualizarPuesto}
        />
        <InputTexto
          titulo="Foto"
          placeholder="Ingresar enlace de foto"
          required
          valor={foto}
          actualizarValor={actualizarFoto}
        />
        <ListaOpciones
          valor={equipo}
          actualizarEquipo={actualizarEquipo}
          equipos={props.equipos}
        />
        <Boton texto="Crear" />
      </form>
      <form onSubmit={manejoColorEquipo}>
        <h2>Agrega nuevos equipos a tu compañia</h2>
        <InputTexto
          titulo="Nombre del Equipo"
          placeholder="Ingresar nombre del equipo"
          required
          valor={nombreEquipo}
          actualizarValor={actualizarNombreEquipo}
        />
        <InputTexto
          titulo="Color"
          placeholder="Ingresar el color en Hexadecimal"
          required
          valor={colorEquipo}
          actualizarValor={actualizarColor}
        />
        <Boton texto="Crear Equipo" />
      </form>
    </section>
  );
};

export default Formulario;
