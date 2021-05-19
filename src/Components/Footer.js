import React from 'react'
import {Container,Col,Row} from 'react-bootstrap'

const Footer = ()=>{
    return(
        <section className="footer-section  ">
          <Container>
          <footer>
                <Row>
                    <Col lg={4} md={4} sm={12} className=" my-3"> 
                            <h3 className="service-footer-title">Services</h3>
                            <ul className="services-list">
                                <li>Architecture</li>
                                <li>Interior Designing</li>

                                <li>Home Planning</li>

                                <li>Furniture </li>


                            </ul>
                    </Col>
                    <Col lg={4} md={4} sm={12} className=" my-3"> 
                            <h3 className="social-footer-title">Social</h3>
                            <div className="d-flex justify-content-center">
                                <ul className="social-network social-circle">
                                <li><a href="https://www.facebook.com/harshpatel.patel.35175/" className="icoFacebook" title="Facebook"><i className="fab fa-facebook-f"></i></a></li>
                                <li><a href="https://www.linkedin.com/in/harsh-patel-b7793115b/" className="icoLinkedin" title="Linkedin"><i className="fab fa-linkedin-in"></i></a></li>
                                <li><a href="https://www.facebook.com/harshpatel.patel.35175/" className="icoWhatsapp" title="Whatsapp"><i className="fab fa-whatsapp"></i></a></li>
                                <li><a href="https://www.facebook.com/harshpatel.patel.35175/" className="icoInstageam" title="Instagram"><i className="fab fa-instagram"></i></a></li>


                                </ul>	
                            </div>			
                    </Col>
                    <Col lg={3} md={4} sm={12} className=" my-3"> 
                            <h3 className="contact-footer-title">Contact Us</h3>
                            <ul className="services-list">
                                <li><i className="fas fa-phone"></i>  +91 8849430206 </li>
                                <li><i className="fas fa-envelope"></i>  hrpatel8935@gmail.com </li>
                                <li><i className="fas fa-map"></i>  Surat Gujarat India </li>


                            </ul>
                    </Col>
                </Row>
            </footer>
          </Container>
        </section>
    )
}
export default Footer;