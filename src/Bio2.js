import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Bio2 = () => {
    return (
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://www.jjay.cuny.edu/sites/default/files/contentgroups/graduate_studies/jj_exterior.jpg" />
          <Card.Body>
            <Card.Title>The First Slide</Card.Title>
            <Card.Text>
              This would be the first slide bio
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      );
    }
    
    export default Bio2;