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

  //Estados
  const [nombre, actualizarNombre] = useState("");
  const [puesto, actualizarPuesto] = useState("");
  const [foto, actualizarFoto] = useState("");
  const [equipo, actualizarEquipo] = useState("");

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
    </section>
  );
};

export default Formulario;
