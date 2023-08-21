import './ListaOpciones.css'

const ListaOpciones = (props) => {

    const manejarCambio = (e) => {
        //console.log('cambio', e.target.value);
        props.actualizarEquipo(e.target.value)
    }

    return <div className='ListaOpciones'>
        <label>Equipo</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" defaultValue="" disabled hidden>Selecciona un equipo</option>
            {props.equipos.map((equipo, index) => {
                return <option key={index}>{ equipo }</option>
            }) }
        </select>
    </div>
};

export default ListaOpciones;