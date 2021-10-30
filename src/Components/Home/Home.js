import React from "react";
import { Carousel } from "react-bootstrap";
import './Home.css';
import img1 from "../../Images/img1.jpg";
import img2 from "../../Images/img2.jpg";
import img3 from "../../Images/img3.jpg";
import Service from "../Service/Service";
import Footer from "../Footer/Footer";
import useFakeServicesDb from "../../Hooks/useFakeServicesDb";

const Home = () => {
    const services = useFakeServicesDb();
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
            <div className="bg-light pt-5 bg-dark" id="services">
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

            {/* Footer Section */}
            <Footer></Footer>
        </>
    );
}

export default Home;