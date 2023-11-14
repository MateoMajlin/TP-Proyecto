import { Link } from 'react-router-dom';
import cuenta from "./Cuenta.module.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Cuenta() {
    return(
        <>
        <h2 className="top"><Link to="/">Inicio</Link></h2>
        <h1 className={cuenta.merengue}>Cuenta lul</h1>
        </>
    )
}
function BasicExample() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}


export default Cuenta;
