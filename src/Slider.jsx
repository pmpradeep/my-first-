import Carousel from 'react-bootstrap/Carousel';
import card1 from './images/manuel-moreno-DGa0LQ0yDPc-unsplash.jpg';
import card2 from './images/edvin-johansson-rlwE8f8anOc-unsplash.jpg'
import card3 from './images/manuel-moreno-DGa0LQ0yDPc-unsplash.jpg'

import rarrow from './icons/211686_back_arrow_icon.png'
import larrow from './icons/211688_forward_arrow_icon.png'
function Slider() {
  return (
    <div className="container mg-top "> 
    <div className="row">
        <div className="col-sm-6">
            <h3 className="text-start fw-bold">Popular Hotels</h3>
        </div>
        <div className="col-sm-6 ">
            <button className="btn-slide">
                <img src={larrow}alt=""  />
            </button>
            <button className="btn-slide">
            <img src={rarrow} alt="" />
            </button>
        </div>
    </div>
    <Carousel  indicators={false} >
      <Carousel.Item>
      <div className="row text-center pt-4 ">
                            <div className="col-12 col-md-6 col-lg-4 card-br ">
                                <div className="card card-br" style={{ width: "18rem" }}>
                                    <img
                                        src={card1}
                                        className="card-br card-img-top"
                                        alt="..."
                                    />
                                    <div className="card-body card-pd">
                                        <h5 className="card-title">Hotel Anandhas</h5>
                                        <p className="card-text">
                                            Some quick example text to build on the card title and make
                                            up the bulk of the card's content.
                                        </p>
                                        <a href="#" className="btn btn-primary card-btn">
                                            Book Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 card-br ">
                                <div className="card card-br" style={{ width: "18rem" }}>
                                    <img
                                          src={card2}
                                        className="card-img-top"
                                        alt="..."
                                    />
                                    <div className="card-body card-pd">
                                        <h5 className="card-title">Hotel Anandhas</h5>
                                        <p className="card-text">
                                            Some quick example text to build on the card title and make
                                            up the bulk of the card's content.
                                        </p>
                                        <a href="#" className="btn btn-primary card-btn">
                                            Book Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 card-br ">
                                <div className="card card-br" style={{ width: "18rem" }}>
                                    <img
                                        src={card3}
                                        className="card-img-top"
                                        alt="..."
                                    />
                                    <div className="card-body card-pd">
                                        <h5 className="card-title">Hotel Anandhas</h5>
                                        <p className="card-text">
                                            Some quick example text to build on the card title and make
                                            up the bulk of the card's content.
                                        </p>
                                        <a href="#" className="btn btn-primary card-btn">
                                            Book Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
      
      </Carousel.Item>
      <Carousel.Item>
      <div className="row text-center pt-4 ">
                            <div className="col-12 col-md-6 col-lg-4 card-br ">
                                <div className="card card-br" style={{ width: "18rem" }}>
                                    <img
                                        src={card1}
                                        className="card-br card-img-top"
                                        alt="..."
                                    />
                                    <div className="card-body card-pd">
                                        <h5 className="card-title">Hotel Anandhas</h5>
                                        <p className="card-text">
                                            Some quick example text to build on the card title and make
                                            up the bulk of the card's content.
                                        </p>
                                        <a href="#" className="btn btn-primary card-btn">
                                            Book Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 card-br ">
                                <div className="card card-br" style={{ width: "18rem" }}>
                                    <img
                                          src={card2}
                                        className="card-img-top"
                                        alt="..."
                                    />
                                    <div className="card-body card-pd">
                                        <h5 className="card-title">Hotel Anandhas</h5>
                                        <p className="card-text">
                                            Some quick example text to build on the card title and make
                                            up the bulk of the card's content.
                                        </p>
                                        <a href="#" className="btn btn-primary card-btn">
                                            Book Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 card-br ">
                                <div className="card card-br" style={{ width: "18rem" }}>
                                    <img
                                        src={card3}
                                        className="card-img-top"
                                        alt="..."
                                    />
                                    <div className="card-body card-pd">
                                        <h5 className="card-title">Hotel Anandhas</h5>
                                        <p className="card-text">
                                            Some quick example text to build on the card title and make
                                            up the bulk of the card's content.
                                        </p>
                                        <a href="#" className="btn btn-primary card-btn">
                                            Book Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
      
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Slider;