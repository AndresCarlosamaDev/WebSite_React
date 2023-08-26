import { useState } from "react";
import { v4 as uuid } from "uuid";
import "./App.css";
import Header from "./components/Header/header";
import Formulario from "./components/Formulario/formulario";
import MiOrg from "./components/MiOrg/MiOrg.js";
import Equipo from "./components/Equipo/Equipo";
import Footer from "./components/Footer/Footer";

function App() {
  //Estado (variable vinculada a una función)
  const [mostrarForm, updateMostrar] = useState(true);
  const [colaboradores, updateColaboradores] = useState([
  {
    id:uuid(),
    equipo: "Front End",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    puesto: "Instructor",
    fav: true
  },
  {
    id:uuid(),
    equipo: "Programación",
    foto: "https://github.com/genesysR-dev.png",
    nombre: "Genesys Rondón",
    puesto: "Desarrolladora de software e instructora",
    fav: false
  },
  {
    id:uuid(),
    equipo: "UX y Diseño",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam",
    fav: false
  },
  {
    id:uuid(),
    equipo: "Programación",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor",
    fav: false
  },
  {
    id:uuid(),
    equipo: "Innovación y Gestión",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzalez",
    puesto: "Dev FullStack",
    fav: false
  }
  ]);
  const [equipos, updateEquipos] = useState([
    {
      id:uuid(),
      titulo: "Programación",
      colorPrincipal: "#57C278",
      colorSecundario: "#D9F7E9",
    },
    {
      id:uuid(),
      titulo: "Front End",
      colorPrincipal: "#82CFFA",
      colorSecundario: "#E8F8FF",
    },
    {
      id:uuid(),
      titulo: "Data Science",
      colorPrincipal: "#A6D157",
      colorSecundario: "#F0F8E2",
    },
    {
      id:uuid(),
      titulo: "Devops",
      colorPrincipal: "#E06B69",
      colorSecundario: "#FDE7E8",
    },
    {
      id:uuid(),
      titulo: "UX y Diseño",
      colorPrincipal: "#DB6EBF",
      colorSecundario: "#FAE9F5",
    },
    {
      id:uuid(),
      titulo: "Móvil",
      colorPrincipal: "#FFBA05",
      colorSecundario: "#FFF5D9",
    },
    {
      id:uuid(),
      titulo: "Innovación y Gestión",
      colorPrincipal: "#FF8A29",
      colorSecundario: "#FFEEDF",
    }
  ])


  //Actualizar Color de equipo
  const actualizarColor = (colorEquipo, id) => {
    console.log('Cambio de color: ', colorEquipo, 'equipo: ', id)
    const actualizarColorEquipo = equipos.map((equipo) => {
      if (equipo.id === id){
        equipo.colorPrincipal = colorEquipo
      }
      return equipo
    })
    updateEquipos(actualizarColorEquipo)
  }

  //Mostrar formulario
  const changeMostrar = () => {
    updateMostrar(!mostrarForm);
  };

  //Registrar colaborador
  const agregarColaborador = (colaborador) => {
    console.log('Nuevo Colaborador: ', colaborador)
    //Spread Operator
    updateColaboradores([...colaboradores, colaborador]);
  }
  //Eliminar Colaborador
  const eliminarColaborador = (id) => {
    console.log("Eliminando colaborador: ", id)
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    updateColaboradores(nuevosColaboradores)
}

  //Crear Equipo
  const crearEquipo = (nuevoEquipo) => {
    updateEquipos([...equipos, {...nuevoEquipo, id: uuid() }]);
  }

  //Actualizacion Fav
  const like = (id) => {
    const cambioFav = colaboradores.map((colaborador) => {
      if (colaborador.id === id) {
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    updateColaboradores(cambioFav)
  }


  return (
    <div>
      <Header />
      {/* {mostrarForm ? <Formulario /> : <div></div>} */}
      {mostrarForm && (
        <Formulario 
        equipos={equipos.map((equipo) => equipo.titulo)}
        agregarColaborador={agregarColaborador}
        crearEquipo={crearEquipo}
        />
      )}
      <MiOrg changeMostrar={changeMostrar} />

      {/* Equipos */}
      {equipos.map((equipo) => {
        // console.log("Equipo: " + equipo.titulo);
        return <Equipo
        datos={equipo}
        key={equipo.titulo}
        colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
        eliminarColaborador={eliminarColaborador}
        actualizarColor={actualizarColor}
        like={like}
        />;
      })}
      <Footer />
    </div>
  );
}

export default App;
