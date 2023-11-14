import { Link } from 'react-router-dom';
import cuenta from "./Cuenta.module.css";

function Cuenta() {
    return(
        <>
        <h2 className="top"><Link to="/">Inicio</Link></h2>
        <h1 className={cuenta.merengue}>Cuenta lul</h1>
        </>
    )
}



export default Cuenta;
