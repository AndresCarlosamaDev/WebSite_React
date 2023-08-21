import { useState } from 'react';
import './MiOrg.css';

const MiOrg = (props) => {

    //Estados
    //const [variable, funtionqueActualliza] = useState('valorInicial');
    //const [mostrar, updateMostrar] = useState(true);

    return <section className="orgSection">
        <h2 className="title">Mi organización</h2>
        <img src="/img/add.png" alt="añadir" onClick={props.changeMostrar} />
    </section>
};

export default MiOrg;