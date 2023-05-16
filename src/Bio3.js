import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Bio3 = () => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://new.jjay.cuny.edu/sites/default/files/2023-02/Building%20Streetscape.jpg" />
      <Card.Body>
        <Card.Title>The Second Slide</Card.Title>
        <Card.Text>
          This would be the second slide bio
        </Card.Text>
        <Button variant="primary">Go somewhere else</Button>
      </Card.Body>
    </Card>
  );
}

export default Bio3;