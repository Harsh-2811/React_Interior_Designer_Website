import React from 'react';
import {Col} from 'react-bootstrap';
import '../Style/Staff.css'
const StaffCard = ()=>{
    return(
        <Col xs={12} sm={6} md={4} >
        <div className="image-flip mt-3" >
            <div className="mainflip flip-0">
                <div className="frontside">
                    <div className="card">
                        <div className="card-body text-center">
                            <p><img className=" img-fluid" src="https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_01.png" alt="card image"/></p>
                            <h3 className="card-title">Sunlimetech</h3>
                            <p className="card-text">This is basic card with image on top, title, description and button.</p>
                           
                        </div>
                    </div>
                </div>
                <div className="backside">
                    <div className="card">
                        <div className="card-body text-center mt-4">
                            <h4 className="card-title">Sunlimetech</h4>
                            <p className="card-text">This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.</p>
                            <ul className="list-inline">
                                <li className="list-inline-item">
                                    <a className="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                        <i className="fab fa-skype"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Col>
    )
}
export default StaffCard;