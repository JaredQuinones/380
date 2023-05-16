import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Routes } from 'react-router-dom';

function MyFormControl() {
  const handleSubmit = (event) => {
    console.log(document.querySelector(".passwordvalue").value)
    event.preventDefault();
    event.stopPropagation();

  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" className="passwordvalue" />
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

export default MyFormControl;