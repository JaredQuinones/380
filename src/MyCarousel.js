import Carousel from 'react-bootstrap/Carousel';
import Bio from './Bio';
import Bio2 from './Bio2';
import Bio3 from './Bio3';
import Bio4 from './Bio4';
import Bio5 from './Bio5';

const MyCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <Bio />
      </Carousel.Item>
      <Carousel.Item>
        <Bio2 />
      </Carousel.Item>
      <Carousel.Item>
        <Bio3 />
      </Carousel.Item>
      <Carousel.Item>
        <Bio4 />
      </Carousel.Item>
      <Carousel.Item>
        <Bio5 />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousel;