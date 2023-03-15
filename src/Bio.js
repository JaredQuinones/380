import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Bio = () => {
    return (
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://avatars.githubusercontent.com/u/127901195?s=400&u=2ecd8d0482ad62c1ca6b529d6231adf5f0b849c7&v=4" />
          <Card.Body>
            <Card.Title>Jared Quinones</Card.Title>
            <Card.Text>
              This is where the bio would be
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      );
    }
    
    export default Bio;