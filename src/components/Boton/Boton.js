import './Boton.css'

const Boton = (props) => {
    return <button className='btn' type="submit">{ props.texto }</button>
};

export default Boton;