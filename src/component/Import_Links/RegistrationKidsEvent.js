import React, { useState,memo } from "react";
import { Button, Form ,Col,Row} from 'react-bootstrap';
import './RegistrationKidsEvent.css';



const RegistrationKidsEvent = () => {
    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({})
    return (
        <div>
            <div className="registrationKidsArena">
                <h1 className="mb-5 highlightText">Registration Form</h1>
                <Form autoComplete="off">
                    <Row className="mb-4 m-2">
                        <Form.Group controlId="chlidName" as={Col} md="6">
                            <Form.Label>Child Name<span>*</span></Form.Label>
                            <Form.Control className="formControl" type="text" placeholder="Child Full Name"></Form.Control>
                        </Form.Group>
                        <Form.Group controlId="gender" as={Col} md="6">
                            <Form.Label>Child Gender<span>*</span></Form.Label>
                            <Form.Select className="formControl" placeholder="please select">
                                <option>please select</option>
                                <option value='Boy'>Boy</option>
                                <option value='Girl'>Girl</option>
                            </Form.Select>
                        </Form.Group>
                    </Row>
                    <Row className="mb-4 m-2">
                        <Form.Group controlId="dob" as={Col} md="6">
                            <Form.Label>Child Date of Birth<span>*</span></Form.Label>
                            <Form.Control className="formControl" type="date"></Form.Control>
                        </Form.Group>
                        <Form.Group controlId="schoolName" as={Col} md="6">
                            <Form.Label>School Name<span>*</span></Form.Label>
                            <Form.Control className="formControl" type="text" placeholder="Enter School Name"></Form.Control>
                        </Form.Group>
                    </Row>
                    <Row className="mb-4 m-2">
                        <Form.Group controlId="gender" as={Col} md="6">
                            <Form.Label>Child Gender<span>*</span></Form.Label>
                            <Form.Select className="formControl" placeholder="please select">
                                <option>please select</option>
                                <option value='Pre-School'>Pre-School</option>
                                <option value='KG1'>KG1</option>
                                <option value='KG2'>KG2</option>
                                <option value='Girl'>Girl</option>
                                <option value='Girl'>Girl</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group controlId="ParentName" as={Col} md="6">
                            <Form.Label>Parent Name<span>*</span></Form.Label>
                            <Form.Control className="formControl" type="text" placeholder="Enter Parent Name"></Form.Control>
                        </Form.Group>
                    </Row>
                    <Row className="mb-4 m-2">
                        <Form.Group controlId="address" as={Col} md="6">
                            <Form.Label>Child Gender<span>*</span></Form.Label>
                            <Form.Control className="formControl" type="text" placeholder="Enter Address"></Form.Control>

                        </Form.Group>
                        <Form.Group controlId="ParentWhatsNumber" as={Col} md="6">
                            <Form.Label>Parent WhatsApp Number<span>*</span></Form.Label>
                            <Form.Control className="formControl" type="tel" placeholder="Enter WhatsApp Number"></Form.Control>
                        </Form.Group>
                    </Row>
                    <Row className="mb-4 m-2">
                        <Form.Group controlId="parentEmail" as={Col} md="6">
                            <Form.Label>Parent Email<span>*</span></Form.Label>
                            <Form.Control className="formControl" type="email" placeholder="Enter Parent Email"></Form.Control>
                        </Form.Group>
                    </Row>
                    <div className="formFooter">
                        <div className="my-3 m-2">
                               <h1><strong>We promise to respect <br/>your data.</strong></h1>
                        </div>
                        <div className="my-3 m-2">
                            <h5>We take data privacy seriously; we collect what we need to provide you with the information that might benefit you or your child. We will never share your data with any schools/institutes/tutors.</h5>
                        </div>
                        <div className="my-3 m-3">
                            I have read and agree to the <a href="#">Terms & Conditions</a>
                        </div>
                        <div className="my-3 m-3">
                             <Button type="button" className="RegisterBtn">Register</Button>
                        </div>
                    </div>
                </Form>
            </div>
        </div>
    )
}
export default memo(RegistrationKidsEvent);