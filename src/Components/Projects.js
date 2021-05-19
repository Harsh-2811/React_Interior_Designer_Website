import React from 'react';
import { Col,Row,Container } from 'react-bootstrap';

import '../Style/Project.css';

const Projects = ({projects})=>{
    

    
    return(
        <Container>
           <h6 className="service-title">Recent Work</h6>
            <h2 className="service-large-title">We have Completed many projects in <b><br/> Modern and Attractive Way </b></h2>
            
                <Row>
                <Col md={12} lg={12} sm={12} >
                            <div class="portfolio-list recent">
                {projects.map((project,index)=>{
                    return(
                        
 						<div class="single-portfolio-item port-bg-1 design illustration" style={{backgroundImage:`url('${project.image}')`}} key={index}>
 							<div class="portfolio-content">
 								<h4 class="portfolio-title">{project.title}</h4>
 								<div class="portfolio-category">Casablanca, Morocco</div>
 							</div>
 						</div>
 						
 				
                    )
                })}
                	</div>
                        </Col>
                </Row>
        </Container>
    
        
    )
}

export default Projects;