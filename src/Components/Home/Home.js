import React from "react";
import { Carousel, Col, Container, Row, Table } from "react-bootstrap";
import './Home.css';
import img1 from "../../Images/img1.jpg";
import img2 from "../../Images/img2.jpg";
import img3 from "../../Images/img3.jpg";
import Service from "../Service/Service";
import Footer from "../Footer/Footer";
import useServicesDb from "../../Hooks/useServicesDb";

const Home = () => {
    const services = useServicesDb();
    // console.log(services);

    const hideContactUsPopupDiv = () => {
        document.getElementById("close-contact-us").style.display = 'none';
    }

    const showContactUsPopupDiv = () => {
        document.getElementById("close-contact-us").style.display = 'block';
    }

    const handleContactUs = (event) => {
        event.preventDefault();
    }

    return (
        <>
            {/* Top Banner Section */}
            <Carousel>
                <Carousel.Item interval={2000}>
                    <img
                    className="d-block w-100 h-100"
                    src={img1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3 className="d-sm-none d-lg-block">Mountain Bus Tour</h3>
                    <p  className="d-sm-none d-lg-block">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                    className="d-block w-100"
                    src={img2}
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h3  className="d-sm-none d-lg-block">City Bus Tour</h3>
                    <p  className="d-sm-none d-lg-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                    className="d-block w-100"
                    src={img3}
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h3 className="d-sm-none d-lg-block">All Tour Double-Decker</h3>
                    <p  className="d-sm-none d-lg-block">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            {/* Services Section */}
            <div className="pt-5 bg-dark" id="services">
                <h1 className="text-center text-white">Our Services</h1>
                <hr className="w-50 mx-auto"/>
                <div className="services-container">
                    <div className="all-services">
                        {
                            services.map(service => <Service 
                                key={service.id}
                                service={service}
                            ></Service>)
                        }
                    </div>
                </div>
            </div>

            {/* 24/7 Support Section */}
            <div className="custom-containers my-5 pt-5 bg-dark">
            <h1 className="text-center text-white pb-5">24/7 Support</h1>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th className="text-center">#</th>
                            <th>Name</th>
                            <th>Schedule</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="text-center">1</td>
                            <td>Henry</td>
                            <td>6am - 2pm</td>
                            <td>000-000000</td>
                        </tr>
                        <tr>
                            <td className="text-center">2</td>
                            <td>William</td>
                            <td>6am - 2pm</td>
                            <td>000-000000</td>
                        </tr>
                        <tr>
                            <td className="text-center">3</td>
                            <td>Brett</td>
                            <td>2pm - 10pm</td>
                            <td>000-000000</td>
                        </tr>
                        <tr>
                            <td className="text-center">4</td>
                            <td>Jacob</td>
                            <td>2pm - 10pm</td>
                            <td>000-000000</td>
                        </tr>
                        <tr>
                            <td className="text-center">5</td>
                            <td>Herald</td>
                            <td>10pm - 6am</td>
                            <td>000-000000</td>
                        </tr>
                        <tr>
                            <td className="text-center">6</td>
                            <td>Peter</td>
                            <td>10pm - 6am</td>
                            <td>000-000000</td>
                        </tr>
                        
                    </tbody>
                </Table>
            </div>

            {/* Latest Update Section */}
            <div  className="pt-5 mb-5">
            <h1 className="text-center bg-dark text-white py-5">Latest Updates</h1>
            <br/>
            <Container>
                <Row>
                    <Col className="text-white d-flex justify-content-center mb-3">
                        <div className="update-card">
                            <div className="update-card-image"></div>
                            <br/>
                            <h3>New Coaches</h3>
                            <div>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </div>
                        </div>
                    </Col>
                    <Col className="text-white d-flex justify-content-center mb-3">
                        <div className="update-card">
                            <div className="update-card-image"></div>
                            <br/>
                            <h3>New Journey</h3>
                            <div>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </div>
                        </div>
                    </Col>
                    <Col className="text-white d-flex justify-content-center">
                        <div className="update-card">
                            <div className="update-card-image"></div>
                            <br/>
                            <h3>New Places</h3>
                            <div>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container> <br/> <br/>

            {/* Travel Anywhere */}
            <div>
                <h1 className="text-center bg-dark text-white py-5">Travel Anywhere</h1>
                <div className="travel-anywhere-div">
                    <br/> <br/> <br/>  <br/> <br/>
                    <h3 className="bg-dark w-75 p-3 rounded-pill text-light m-auto text-center">Want to travel any of your favourite palces ...</h3>
                    <p className="bg-dark w-50 p-3 text-light m-auto text-center" style={{borderRadius: '0 0 75px 75px'}}>But your favourite place is not listed in the regular tours, contact us now ...</p>
                    <br/>
                    <div className="text-center"><button className="rounded-pill btn btn-warning" onClick={showContactUsPopupDiv}>Contact Us Now</button></div>
                    <br/>
                    <h3 className="w-50 p-3 text-light m-auto text-center" style={{backgroundColor: 'rgba(0, 0, 0, 0.75)', borderRadius: '75px 75px 0 0'}}>Or,</h3>
                    <p className="w-75 p-3 rounded-pill text-light m-auto text-center" style={{backgroundColor: 'rgba(0, 0, 0, 0.75)'}}>We also arrange tours for wedding, birthday, parties and so on.</p>
                </div>
                <br/>
            </div>
            </div>

            {/* Footer Section */}
            <Footer></Footer>

            <div className="contact-us-popup-div" id="close-contact-us">
                <br/> <br/> <br/> <br/> <br/>
                <div className="contact-us-popup">
                    <div className="contact-us-top">
                        <button onClick={hideContactUsPopupDiv} className="button-close">X</button>
                    </div> <br/>
                    <div>
                        <h4 className="text-white">Please, contact us!</h4> <br/>
                        <form onSubmit={handleContactUs}>
                            <input type="text" name="name" className="w-100 bg-dark rounded-pill text-white px-4 py-2" style={{border: '1px solid gray', outline: 'none'}} placeholder="Please, write your name here"/> <br/> <br/>
                            <input type="email" name="email" className="w-100 bg-dark rounded-pill text-white px-4 py-2" style={{border: '1px solid gray', outline: 'none'}} placeholder="Please, write your email address here"/> <br/> <br/>
                            <textarea cols="50" name="message" className="w-100 bg-dark rounded-pill text-white px-4 py-2" style={{border: '1px solid gray', outline: 'none'}} placeholder="Please, tell us where do you want to go ..."/> <br/> <br/>
                            <button className="btn btn-primary rounded-pill">Submit</button> &nbsp; &nbsp; <button className="btn btn-danger rounded-pill" onClick={hideContactUsPopupDiv}>Cancel</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;