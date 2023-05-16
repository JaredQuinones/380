import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Bio5 = () => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.jjay.cuny.edu/sites/default/files/styles/medium/public/topcollege_story.jpg?" />
      <Card.Body>
        <Card.Title>The Forth Slide</Card.Title>
        <Card.Text>
          This would be the forth slide bio
        </Card.Text>
        <Button variant="primary">Go somewhere else</Button>
      </Card.Body>
    </Card>
  );
}

export default Bio5;