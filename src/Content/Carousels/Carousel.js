import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

function MainCarousel() {
    return (
    <Carousel fade interval={2000}>
    <Carousel.Item>
    <Link className="d-block w-100">          
    <img
        className="d-block w-100"
        src={require('../../imge/img1.webp') }
        alt="first slide"
    /> 
    </Link>                
    </Carousel.Item>       
    <Carousel.Item>
    <Link className="d-block w-100">          
    <img
        className="d-block w-100"
        src={require('../../imge/img2.webp') }
        alt="second slide"
    /> 
    </Link>                
    </Carousel.Item>
    <Carousel.Item>
    <Link className="d-block w-100">         
    <img
        className="d-block w-100"
        src={require('../../imge/img3.webp') }
        alt="third slide"
    />
    </Link>              
    </Carousel.Item>
    <Carousel.Item>
    <Link className="d-block w-100">
    <img
        className="d-block w-100"
        src={require('../../imge/img4.webp') }
        alt="fourth slide"
    />
    </Link>
    </Carousel.Item>
    <Carousel.Item>
    <Link className="d-block w-100">
    <img
        className="d-block w-100"
        src={require('../../imge/Untitled-13_1100x (1).webp') }
        alt="fifth slide"
    />
    </Link>
    </Carousel.Item>       
    </Carousel>
);
}

export default MainCarousel;