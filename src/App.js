import { useState } from "react";
import "./App.css";
import Header from "./components/Header/header";
import Formulario from "./components/Formulario/formulario";
import MiOrg from "./components/MiOrg/MiOrg.js";
import Equipo from "./components/Equipo/Equipo";
import Footer from "./components/Footer/Footer";

function App() {
  //Estado (variable vinculada a una función)
  const [mostrarForm, updateMostrar] = useState(false);
  const [colaboradores, updateColaboradores] = useState([{  
  equipo:"Front End",
  foto:"https://github.com/harlandlohora.png",
  nombre:"Harland",
  puesto:"Instructor"
}]);

  const changeMostrar = () => {
    updateMostrar(!mostrarForm);
  };
  //Registrar colaborador
  const agregarColaborador = (colaborador) => {
    console.log('Nuevo Colaborador: ', colaborador)
    //Spread Operator
    updateColaboradores([...colaboradores, colaborador]);
  }

  const equipos = [
    {
      titulo: "Programación",
      colorPrincipal: "#57C278 ",
      colorSecundario: "#D9F7E9",
    },
    {
      titulo: "Front End",
      colorPrincipal: "#82CFFA",
      colorSecundario: "#E8F8FF",
    },
    {
      titulo: "Data Science",
      colorPrincipal: "#A6D157",
      colorSecundario: "#F0F8E2",
    },
    {
      titulo: "Devops",
      colorPrincipal: "#E06B69",
      colorSecundario: "#FDE7E8",
    },
    {
      titulo: "UX y Diseño",
      colorPrincipal: "#DB6EBF",
      colorSecundario: "#FAE9F5",
    },
    {
      titulo: "Móvil",
      colorPrincipal: "#FFBA05",
      colorSecundario: "#FFF5D9",
    },
    {
      titulo: "Innovación y  Gestión",
      colorPrincipal: "#FF8A29",
      colorSecundario: "#FFEEDF",
    },
  ];

  return (
    <div>
      <Header />
      {/* {mostrarForm ? <Formulario /> : <div></div>} */}
      {mostrarForm && (
        <Formulario 
        equipos={equipos.map((equipo) => equipo.titulo)}
        agregarColaborador={agregarColaborador}
        />
      )}
      <MiOrg changeMostrar={changeMostrar} />

      {/* Equipos */}
      {equipos.map((equipo) => {
        console.log("Equipo: " + equipo.titulo);
        return <Equipo
        datos={equipo}
        key={equipo.titulo}
        colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
        />;
      })}
      <Footer />
    </div>
  );
}

export default App;
