import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { HashLink as LinkBook } from 'react-router-hash-link';
import { Navbar,Nav,Container } from 'react-bootstrap';
import {useLocation} from 'react-router-dom'

const Header = ()=>{
    const location = useLocation();
    return(
        
        <div>
        <Navbar bg="primary" variant="dark" expand="lg" collapseOnSelect>
           <Container>
           <Navbar.Brand href="#home">Decorating Den <span>Interior Decor</span></Navbar.Brand>
             <Navbar.Toggle aria-controls="basic-navbar-nav" />
             <Navbar.Collapse id="basic-navbar-nav">
                 
                 <Nav activeKey={location.pathname} style={{"marginLeft":"auto"}}>
                         <LinkContainer exact to='/'>
                             <Nav.Link className="animate_link " ><i className="fas fa-home pr-1"></i> Home</Nav.Link>
                         </LinkContainer>
                         <LinkContainer to='/about' className="animate_link nav-link">
                         <Nav.Link className="animate_link " > <i className="fas fa-info pr-2"></i>  About me</Nav.Link>
                            </LinkContainer>
                         <LinkContainer exact to='/services'>
                             <Nav.Link className="animate_link"><i className="fas fa-server pr-2"></i>  Services</Nav.Link>
                         </LinkContainer>
                         
                         <LinkContainer exact to='/projects'>
                             <Nav.Link className="animate_link"><i className="fas fa-briefcase pr-2"></i> Portfolio</Nav.Link>
                             </LinkContainer>
                        
                        
                         <LinkContainer exact to='/contacts'>
                         <Nav.Link className="animate_link"><i className="fas fa-envelope pr-2 "></i> Contact Me</Nav.Link>

                         </LinkContainer>
                 </Nav>         

                            
             </Navbar.Collapse>
           </Container>
             </Navbar>
     </div>
    )
}
export default Header;