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

function LoginPage () {

return (

<div className = «loginPage»>

<h1 className = «loginPage-title»>Log in to Twitter</h1>

<form>

<input type = «text» name= «username»></input>

<input type= «password» name= «password»/>

</form>

</div>

);

}
export default Cuenta;
