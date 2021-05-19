import React from 'react'
import { Container,Row } from 'react-bootstrap'
import AbstractService from '../Components/AbstractService'
import Poster from '../Components/Poster'
const ServiceScreen = (props)=>{
    const {title} =props;
    const projects =     [
        {
            "id":"1",
            "title":"River Front View",
            
            "image":"/images/port-bg-5.JPG",
            
        },
        {
            "id":"2",
            "title":"IT Industry",
            
            "image":"/images/port-bg-4.JPG",
            
        },
        {
            "id":"3",
            "title":"Resort",
            
            "image":"/images/port-bg-7.PNG",
            
        },
        {
            "id":"4",
            "title":"Home",
            
            "image":"/images/port-bg-3.JPG",
            
        },
        
    ]

    return(
        <div>
            <section className="main-service-section">
                <Poster title={title}/>
            </section>
            <section className="home-service my-2 p-3">
                <AbstractService/>
            </section>  
        </div>
    )
}
export default ServiceScreen