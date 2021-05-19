import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';


const AbstractService = ()=>{
    return(
        <Container>
            <h6 className="service-title">Services</h6>
            <h2 className="service-large-title">We are provided great<b><br/> Architecture & Decor Professional</b></h2>
            <Row className="mt-2 animate__animated animate__fadeInUp">
                <Col md={4} lg={4} sm={12}>
 					<div className="single-service-area service-1 wow fadeInUp" data-wow-delay=".3s">
 						<div className="service-icon">
 							<img src="/images/Architecture.png" alt="architecture" width="50%"/>
 						</div>
 						<h4>Architecture</h4>
 						<p>Architecture Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, libero.</p>
 					</div>
 				</Col>
                 <Col md={4} lg={4} sm={12}>
 					<div className="single-service-area service-2 wow fadeInUp" data-wow-delay=".3s">
 						<div className="service-icon">
 							<img src="/images/Design.png" alt="design" width="50%"/>
 						</div>
 						<h4>Interior Designing</h4>
 						<p>Architecture Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, libero.</p>
 					</div>
 				</Col>
                 <Col md={4} lg={4} sm={12}>
 					<div className="single-service-area service-3 wow fadeInUp" data-wow-delay=".3s">
 						<div className="service-icon">
 							<img src="/images/Furniture.png" alt="furniture" width="50%"/>
 						</div>
 						<h4>Furniture</h4>
 						<p>Architecture Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, libero.</p>
 					</div>
 				</Col>
            </Row>
        </Container>
    )
}
export default AbstractService