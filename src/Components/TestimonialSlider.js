import React from 'react'
import { Carousel,Col,Row,Container } from 'react-bootstrap'
import '../Style/TestiSlider.css'
const TestimonialSlider = ()=>{
    return(
        <Container>
        <Carousel className="">
            <Carousel.Item>
                
                    <Row>
                        <Col md={4}>
                        <div class="card d-flex mx-auto">
                            <div class="card-image"> <img class="img-fluid d-flex mx-auto" src="/images/characters/client-img-2.jpg" /> </div>
                            <div class="card-text">
                                <div class="card-title">Lorem Ipsum!</div> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus Duis leo. Donec sodales sagittis magna
                            </div>
                            <div class="footer"> <span id="name">Micheal Smith<br/></span> <span id="position">CEO of <a href="#">Google.com</a></span> </div>
                        </div>
                        </Col>
                        <Col md={4}>
                        <div class="card d-flex mx-auto">
                            <div class="card-image"> <img class="img-fluid d-flex mx-auto" src="/images/characters/client-img-2.jpg" /> </div>
                            <div class="card-text">
                                <div class="card-title">Lorem Ipsum!</div> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus Duis leo. Donec sodales sagittis magna
                            </div>
                            <div class="footer"> <span id="name">Micheal Smith<br/></span> <span id="position">CEO of <a href="#">Google.com</a></span> </div>
                        </div>
                        </Col>
                        <Col md={4}>
                        <div class="card d-flex mx-auto">
                            <div class="card-image"> <img class="img-fluid d-flex mx-auto" src="/images/characters/client-img-2.jpg" /> </div>
                            <div class="card-text">
                                <div class="card-title">Lorem Ipsum!</div> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus Duis leo. Donec sodales sagittis magna
                            </div>
                            <div class="footer"> <span id="name">Micheal Smith<br/></span> <span id="position">CEO of <a href="#">Google.com</a></span> </div>
                        </div>
                        </Col>
                    </Row>
                    
            </Carousel.Item>

            <Carousel.Item>
                <Container>
                    <Row>
                        <Col md={4}>
                        <div class="card d-flex mx-auto">
                            <div class="card-image"> <img class="img-fluid d-flex mx-auto" src="/images/characters/client-img-3.jpg" /> </div>
                            <div class="card-text">
                                <div class="card-title">Lorem Ipsum!</div> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus Duis leo. Donec sodales sagittis magna
                            </div>
                            <div class="footer"> <span id="name">Micheal Smith<br/></span> <span id="position">CEO of <a href="#">Google.com</a></span> </div>
                        </div>
                        </Col>
                        <Col md={4}>
                        <div class="card d-flex mx-auto">
                            <div class="card-image"> <img class="img-fluid d-flex mx-auto" src="/images/characters/client-img-3.jpg" /> </div>
                            <div class="card-text">
                                <div class="card-title">Lorem Ipsum!</div> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus Duis leo. Donec sodales sagittis magna
                            </div>
                            <div class="footer"> <span id="name">Micheal Smith<br/></span> <span id="position">CEO of <a href="#">Google.com</a></span> </div>
                        </div>
                        </Col>
                        <Col md={4}>
                        <div class="card d-flex mx-auto">
                            <div class="card-image"> <img class="img-fluid d-flex mx-auto" src="/images/characters/client-img-3.jpg" /> </div>
                            <div class="card-text">
                                <div class="card-title">Lorem Ipsum!</div> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus Duis leo. Donec sodales sagittis magna
                            </div>
                            <div class="footer"> <span id="name">Micheal Smith<br/></span> <span id="position">CEO of <a href="#">Google.com</a></span> </div>
                        </div>
                        </Col>
                    </Row>
                    </Container>
            </Carousel.Item>
           
            
        </Carousel>
        </Container>
    )
}

export default TestimonialSlider;