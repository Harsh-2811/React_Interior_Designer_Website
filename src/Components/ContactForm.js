import React ,{useState}from 'react';
import { Form, Button, Row, Col,Container } from 'react-bootstrap'


import * as emailjs from 'emailjs-com'

const ContactForm = (props)=>{

const {makeMessage} = props;
const [name,setName] = useState("");
const [email,setEmail] = useState("");

const [subject,setSubject] = useState("");

const [message,setMessage] = useState("");

const sendInquiry = (e)=>{
    e.preventDefault()
    if(name === " ")
    {
        makeMessage({"msg":"Please Fill Your Name","variant":"error"})
    }
    else if(email === " ")
    {
        makeMessage({"msg":"Please Fill Your Email","variant":"error"})
    }
    else if(subject === " ")
    {
        makeMessage({"msg":"Please Fill Your Subject","variant":"error"})
    }
    else if(message === " ")
    {
        makeMessage({"msg":"Please Fill Your Message","variant":"error"})
    }
    else{
        let templateParams = {
            from_name: email,
            to_name: 'harshpatel281199@gmail.com',
            subject: subject,
            message: message,
       }
    emailjs.send(
        'service_pfm4avx',
        'template_bu2qqcq',
         templateParams,
        'user_00FBXQES8XbhV1THedLJF'
        ).then(function(response) {
            setName("");
            setEmail("");
            setSubject("");
            setMessage("")
            makeMessage({"msg":"Your Message has been sent","variant":"success"})
            
          }, function(error) {
            makeMessage({"msg":"Failed","variant":"error"})
          });
    }
}
    return(
        <div className="">

            <Container>
            <h2 className="text-center contact-footer-title" style={{"color":"#593196"}}>
                    Contact Us
                </h2>
                <Row>
                <Col md={6} lg={6} sm={12} className="pl-5">
               
            <Form onSubmit={sendInquiry}>

                    <Form.Group controlId='name' className="my-1">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            required
                            type='name'
                            placeholder='Enter name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        >
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId='email' className="my-1">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                            required
                            type='email'
                            placeholder='Enter Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        >
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId='Subject' className="my-1">
                        <Form.Label>Subject</Form.Label>
                        <Form.Control
                            required
                            type='text'
                            placeholder='Enter Subject'
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                        >
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId='Message' className="my-1">
                        <Form.Label>Message</Form.Label>
                        <Form.Control
                            required
                            as="textarea" rows={3}
                            placeholder='Enter Message'
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        >
                        </Form.Control>
                    </Form.Group>

                    <Button type='submit' className="mt-2 primary" variant='primary'>
                        Send Message
                    </Button>

                    </Form>

            </Col>
            <Col md={1} lg={1} sm={12}>
            </Col>
            <Col md={5} lg={5} sm={12} className="pr-3">
                    <img src="/images/Contact.png" width="85%" alt="contact"></img>
            </Col>
                </Row>
            </Container>
       
        </div>
    )
}
export default ContactForm