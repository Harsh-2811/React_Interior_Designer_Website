import React from 'react';
import {Carousel} from 'react-bootstrap'

const Slider = ({items})=>{
    return(
        <Carousel fade >
            {
                items.map((item,index)=>{
                    return(
                        <Carousel.Item key={index}>
                            
                        <div className="hero-image">
                        <img
                        className="d-block w-100 slideImage"
                        src={item.img}
                        alt="First slide"
                        
                        />
                        </div>
                         <Carousel.Caption className="slider-caption">
                             <a href="#" className="slider-link animate__animated animate__fadeInDownBig" key={`name_${index}`}> Welcome To Decorating Den</a>
                           <h3 className="slider-title animate__animated animate__fadeInLeft" key={`title_${index}`}>{item.title}</h3>
                            
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                })
            }

 </Carousel>
    )
}
export default Slider;