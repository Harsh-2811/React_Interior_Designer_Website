import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';

const About = ()=>{
    return(
        <Container>
            <Row className="my-2" className="wow animate__animated animate__fadeIn">
                <Col md={12} sm={12} lg={4}  >
                    <img src="/images/About.jpg" style={{"boxShadow":"5px 10px 18px #593196"}} alt="about" width="70%"/>
                </Col>
                <Col md={12} sm={12} lg={8} className="p-3">
                        <div class="section-about-title">
 							<h6 className="aboutus-title">About Us</h6>
 							<h2 className="about-desc-h2" style={{"color":"#593196"}}>We're leading <b>Architecture and Interior Designing Firm</b> in Your Town</h2>
 						</div>
                         <p className="my-2 p-2">
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a metus pharetra, rutrum justo consectetur, malesuada arcu. Mauris quis diam id quam congue consectetur. Pellentesque et consequat est. Morbi pulvinar, velit vitae auctor eleifend, orci mi placerat mi, vitae accumsan leo odio id nisi. Sed tristique rhoncus volutpat. 
                         </p>
                         <div className="p-2">
                         <h4>Our Vision</h4>
                         <ul className="vision-list">
                             <li>We always build superior design</li>
                             <li>Uninque latest equipment used the project build.</li>

                             <li>Since our launch in 1987, to deliver high value project.</li>

                         </ul>
                         </div>
                </Col>
            </Row>
        </Container>
    )
}
export default About