import React from 'react'
import {Button,Container,Row,Col} from 'react-bootstrap'
import Slider from '../Components/Slider'
import ContactForm from '../Components/ContactForm'
import swal from 'sweetalert';
import About from '../Components/About'
import PriceCard from '../Components/PriceCard'


import '../Style/Home.css';
import AbstractService from '../Components/AbstractService';
import Projects from '../Components/Projects';
const HomeScreen = (props)=>{
    const items = [
        
        
        {"img":"/images/slider1.jpg","title":"Hall Decoration","content":"lorem ipsum"},
        {"img":"/images/slider2.jpg","title":"Waiting Area Decoration","content":"lorem ipsum"},
        {"img":"/images/slider3.jpg","title":"TV Romm Decoration","content":"lorem ipsum"}

    ]

    const pricing_list =[
        {"price":"1500","title":"Basic","color":"first","short":"Perfect for Residential Interior Design","included":["Interior Design","Floor Design","Silling Design"]},
        
        {"price":"2000","title":"Standard","color":"second","short":"Perfect for Residential Interior Design","included":["Interior Design","Floor Design","Silling Design","Furniture"]},
        {"price":"3000","title":"Premium","color":"main","short":"Perfect for Residential Interior Design","included":["Interior Design","Floor Design","Silling Design","Furniture","Kitchen"]},
        

    ]

    const projects =     [
            {
                "id":"1",
                "title":"River Front View",
                
                "image":"/images/port-bg-5.jpg",
                
            },
            {
                "id":"2",
                "title":"IT Industry",
                
                "image":"/images/port-bg-4.jpg",
                
            },
            {
                "id":"3",
                "title":"Resort",
                
                "image":"/images/port-bg-7.png",
                
            },
            {
                "id":"4",
                "title":"Home",
                
                "image":"/images/port-bg-3.jpg",
                
            },
            
        ]
    
    
    

    const makeMessage = (data)=>{
        
        if(data.variant === "success"){
            swal("Success!", data.msg, data.variant);
        }
        else{
            swal("Oops!", data.msg, data.variant);
        }
    };
    return(
       <div>
        <section className="top-slider">
            <Slider items = {items}/>
        </section>
        <div className="little-intro-section">
            <Container>       
                <section className=" p-3 my-3"> 
                    <Row>
                        <Col md={9} lg={9} sm={12} className="p-2 showup">
                            <Row>
                                <Col md={5} lg={5} sm={12} className="p-2">
                                <img src="/images/Intro.png" width="80%" alt="intro"/>
                                </Col>
                                <Col md={7} lg={7} sm={12} className="px-2 py-5">
                                    <h1>
                                    We are top <span style={{"color":"#b21a26fa"}}>architecture</span> organization to create the best <span style={{"color":"#b21a26fa"}}>interior design</span>
                                    </h1>
                                    <Button variant="outline-primary my-2" >
                                        Our Services
                                    </Button>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={1} lg={1} sm={12}>
                        </Col>
                        <Col md={2} lg={2} sm={12} className="text-center" style={{"backgroundColor":"#593196"}}>
                        <i className="fas fa-building fa-4x text-white py-5"></i>
                            <h1 className="text-center text-white">25+</h1>
                            <p className="text-center text-white">Year Experiance</p>
                        </Col>
                    </Row>
                </section>
                
            </Container>
            </div>

            <section className="home-about my-2 p-3" style={{"backgroundColor":"#eee"}}>
                <About/>
            </section>
            <section className="home-service my-2 p-3">
                <AbstractService/>
            </section>  
            <section className="home-project mt-2 p-3">
                
                <Projects projects={projects}/>
            </section>  
            <section className="home-contact mt-2 p-3">
                
                <ContactForm makeMessage={makeMessage}/>
            </section>  
            <section className="home-price mt-2 p-3" style={{"backgroundColor":"#3c485e"}}>
                
                <PriceCard pricing_list={pricing_list}/>
            </section>  
       </div>
    )
}

export default HomeScreen;