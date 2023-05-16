import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Bio4 = () => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.usnews.com/dims4/USNEWS/c846dc1/17177859217/resize/800x540>/quality/85/?url=https%3A%2F%2Fmedia.beam.usnews.com%2Fb0%2F18c07d484b60cb511657cd9e3ed68a%2Fcollege-photo_837.jpg" />
      <Card.Body>
        <Card.Title>The Third Slide</Card.Title>
        <Card.Text>
          This would be the third slide bio
        </Card.Text>
        <Button variant="primary">Go somewhere else</Button>
      </Card.Body>
    </Card>
  );
}

export default Bio4;