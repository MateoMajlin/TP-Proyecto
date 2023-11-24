import { Link } from 'react-router-dom';
import cuenta from "./Cuenta.module.css";
function Cuenta(){
 return (
    <>
    <h1 className={cuenta.left}>Inicio</h1><h1 className={cuenta.center}>Bienvenido a Cuenta</h1>
    <div>
        <img src='https://media.tenor.com/yTHoLS82szwAAAAM/pato-girando.gif' alt='patogirando'></img>
    </div>
    <Link to="./IniciarSesion"><h1>Iniciar Sesion</h1></Link>
    <Link to="./CrearCuenta"><h1>Crear Cuenta</h1></Link>
    </>
 );
}
export default Cuenta;
