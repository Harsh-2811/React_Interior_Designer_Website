import React from 'react';
import {Container,Row,Col,Button} from 'react-bootstrap';
import '../Style/Pricing_card.css'
const PriceCard = ({pricing_list})=>{
    return(
        <Container>
            <h2 className="text-center pricing-title" style={{"color":"#fff","marginBottom":"-2%"}}>
                    Pricing List
                </h2>
            <Row>
                {
                    pricing_list.map((item,index)=>{
                        return(
                            <Col lg={4} md={6} key={index}>
                           <div class={`pricingTable ${item.color} `}>
                                <div class="pricingTable-header">
                                    <h3 class="title">{item.title}</h3>
                                </div>
                                <div class="pricing-icon">
                                    <i class="fas fa-money-check"></i>
                                </div>
                                <ul class="pricing-content">
                                    {
                                        item.included.map((service)=>{
                                            return(
                                                <li>{service}</li>
                                            )
                                        })
                                    }
                                    
                                </ul>
                                <div class="price-value">
                                    <span class="amount">₹ {item.price}</span>
                                    <span class="duration">/ sqare Feet</span>
                                </div>
                                <div class="pricingTable-signup">
                                    <a>Purchase</a>
                                </div>
                            </div>
                            </Col>
                        )
                    })
                }
            </Row>
        </Container>
    )
}
export default PriceCard;