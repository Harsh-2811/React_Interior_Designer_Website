import React from 'react'
import { Container,Row } from 'react-bootstrap'
import About from '../Components/About'
import Poster from '../Components/Poster'
import StaffCard from '../Components/StaffCard'

import TestimonialSlider from '../Components/TestimonialSlider'
import '../Style/About.css'
const AboutScreen = (props)=>{
    const {title} =props
    return(
        <section>
            <Poster title={title}/>
            <div className="my-3">
            <About/>
            </div>

            <div className=" p-3 mt-3 " id="testi">
                <div style={{"backgroundImage":"url('/images/testimonial/testimonial-bg.jpg')"}} className="p-3">
                    <Container>
                        <div className="row">
                            <div className="col-lg-12 text-center ">
                            <h6 className="service-title">Testimonials</h6>
                            <h2 className="service-large-title">Customer's <b>Feedback</b></h2>
           
                            </div>
                        </div>
                       

                        <TestimonialSlider />
                       
                        
 					
                    </Container>
                </div>
            </div>


            <div class="p-3 mt-3">
                
                    <Container>
                        <div class="row">
                            <div class="col-lg-12 text-center ">
                            <h6 className="service-title">Team</h6>
                            <h2 className="service-large-title">Here is our <b>Feedback</b> staff</h2>
           
                            </div>
                        </div>
                        <Row>
                            <StaffCard/>
                            <StaffCard/>
                            <StaffCard/>
                        </Row>
 					
                    </Container>
                
            </div>

            
        </section>
    )

}
export default AboutScreen;