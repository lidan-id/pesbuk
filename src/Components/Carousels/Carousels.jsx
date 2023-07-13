import Carousel from "react-bootstrap/Carousel";
import banner1 from "./79_inr.jpg";
import banner2 from "./81_inr.jpg";
import banner3 from "./85_inr.jpg";

function Carousels() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={banner1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={banner2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={banner3} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousels;
