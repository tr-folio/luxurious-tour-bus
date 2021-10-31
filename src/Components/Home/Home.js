import React from "react";
import { Accordion, Carousel, Table } from "react-bootstrap";
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
            <h1 className="text-center text-white">24/7 Support</h1>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Schedule</th>
                        <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Henry</td>
                            <td>6am - 2pm</td>
                            <td>000-000000</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>William</td>
                            <td>6am - 2pm</td>
                            <td>000-000000</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Brett</td>
                            <td>2pm - 10pm</td>
                            <td>000-000000</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Jacob</td>
                            <td>2pm - 10pm</td>
                            <td>000-000000</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Herald</td>
                            <td>10pm - 6am</td>
                            <td>000-000000</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Peter</td>
                            <td>10pm - 6am</td>
                            <td>000-000000</td>
                        </tr>
                        
                    </tbody>
                </Table>
            </div>

            {/* Latest News Section */}
            <div  className="pt-5 mb-5">
            <h1 className="text-center bg-dark text-white py-5">Latest Updates</h1>
                <Accordion defaultActiveKey="0" className="w-75 mx-auto">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Comfortable Jouney</Accordion.Header>
                        <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Environment Friendly Coaches</Accordion.Header>
                        <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Qualified Crew Members</Accordion.Header>
                        <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>

            {/* Footer Section */}
            <Footer></Footer>
        </>
    );
}

export default Home;