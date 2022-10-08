import React, { useState, memo } from "react";
import { Link } from "react-router-dom";
import { Button, Form, Col, Row } from 'react-bootstrap';
import './StudentProfileComp.css';
import HeaderComponent from "../../Header/Header";
import { useFormik } from 'formik';

const validate = values => {
    const errors = {};
    if (!values.parentName) {
        errors.parentName = 'Field is Required';
    } else if (values.parentName.length > 15) {
        errors.parentName = 'Must be 15 characters or less';
    }

    if (!values.parenetQual) {
        errors.parenetQual = 'Required';
    } else if (values.parenetQual.length > 20) {
        errors.parenetQual = 'Must be 20 characters or less';
    }

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    return errors;
};

function StudentProfileComp() {
    const [file, setFile] = useState('');
    const [filename, setFilename] = useState('');

    const formik = useFormik({
        initialValues: {
            parentName: '',
            parenetQual: '',
            paretOcc: '',
        },
        validate,
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });

    const photoupload = async (e) => {
        const ImgData = e.target.files[0];
        setFilename(ImgData.name)
        setFile(URL.createObjectURL(ImgData))

    }
    return (
        <div>
            <HeaderComponent />
            <div className="profileContainer baseContainer">
                <div className="head pt-4">
                    <span>
                        <Link to='/'><a>Home &nbsp;&gt;&nbsp;</a></Link>
                        <Link to='/'><a>My Account &nbsp;&gt;&nbsp;</a></Link>
                        <Link to='/'><a>My Profile</a></Link>
                    </span>
                </div>
                <div className="subHead pt-4">
                    My Profile
                </div>
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <a class="nav-link active" id="student-tab" data-bs-toggle="tab" data-bs-target="#student" type="button" role="tab" aria-controls="home" aria-selected="true">Student Details</a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a class="nav-link" id="parent-tab" data-bs-toggle="tab" data-bs-target="#parent" type="button" role="tab" aria-controls="profile" aria-selected="false">Parent Details</a>
                    </li>
                </ul>
                <div className="card profileCard mt-3">
                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show active" id="student" role="tabpanel" aria-labelledby="student-tab">
                            <Form autoComplete="off">
                                <div className="cardHeading1">Basic Information</div>
                                <Row className="mb-4 m-2">
                                    <Form.Group controlId="FatherName" as={Col} md="6">
                                        <Form.Label>Full Name<span>*</span></Form.Label>
                                        <Form.Control className="formControl" type="text" placeholder="Please enter Full Name"></Form.Control>
                                        <Form.Label>Applied for Classes<span>*</span></Form.Label>
                                        <Form.Select className="formControl" placeholder="please select">
                                            <option>please select</option>
                                            <option value="2">Male</option>
                                            <option value="3">Female</option>
                                            <option value="4">Others</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group controlId="FatherName" as={Col} md="6">
                                        <Form.Label>Upload/Update Photo</Form.Label>
                                        <Form.Control className="formControl" type="file"></Form.Control>
                                    </Form.Group>
                                </Row>
                                <Row className="mb-4 m-2">
                                    <Form.Group controlId="dob" as={Col} md="6">
                                        <Form.Label>Date of Birth<span>*</span></Form.Label>
                                        <Form.Control className="formControl" type="date" placeholder="Please enter Date of Birth"></Form.Control>
                                    </Form.Group>
                                    <Form.Group controlId="studyclass" as={Col} md="6">
                                        <Form.Label>Applied for Classes<span>*</span></Form.Label>
                                        <Form.Select className="formControl" placeholder="please select">
                                            <option>please select</option>
                                            <option value="1">Pre-School</option>
                                            <option value="2">KG1</option>
                                            <option value="3">KG2</option>
                                            <option value="4">I</option>
                                            <option value="5">II</option>
                                            <option value="6">III</option>
                                            <option value="7">IV</option>
                                            <option value="8">V</option>
                                            <option value="9">VI</option>
                                            <option value="10">VII</option>
                                            <option value="11">VIII</option>
                                            <option value="12">IX</option>
                                            <option value="13">X</option>
                                            <option value="14">XI</option>
                                            <option value="15">XII</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Row>
                                <Row className="mb-4 m-2">
                                    <Form.Group controlId="pob" as={Col} md="6">
                                        <Form.Label>Place of Birth<span>*</span></Form.Label>
                                        <Form.Control className="formControl" type="text" placeholder="Please enter Place of Birth"></Form.Control>
                                    </Form.Group>
                                    <Form.Group controlId="Caste" as={Col} md="6">
                                        <Form.Label>Caste<span>*</span></Form.Label>
                                        <Form.Select className="formControl" placeholder="please select">
                                            <option>please select</option>
                                            <option value="1">SC</option>
                                            <option value="2">ST</option>
                                            <option value="3">OBC</option>
                                            <option value="4">General</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Row>
                                <Row className="mb-4 m-2">
                                    <Form.Group controlId="Religion" as={Col} md="6">
                                        <Form.Label>Religion<span>*</span></Form.Label>
                                        <Form.Control className="formControl" type="text" placeholder="Please enter Religion"></Form.Control>
                                    </Form.Group>
                                    <Form.Group controlId="BloodGroup" as={Col} md="6">
                                        <Form.Label>Blood Group<span>*</span></Form.Label>
                                        <Form.Select className="formControl" placeholder="please select">
                                            <option>please select</option>
                                            <option value="1">A+</option>
                                            <option value="2">A-</option>
                                            <option value="3">B+</option>
                                            <option value="4">B-</option>
                                            <option value="1">AB+</option>
                                            <option value="2">AB-</option>
                                            <option value="3">O+</option>
                                            <option value="4">O-</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Row>
                                <Row className="mb-4 m-2">
                                    <Form.Group controlId="Address" as={Col} md="6">
                                        <Form.Label>Address<span>*</span></Form.Label>
                                        <Form.Control className="formControl" type="text" placeholder="Please enter Address"></Form.Control>
                                    </Form.Group>
                                    <Form.Group controlId="State" as={Col} md="6">
                                        <Form.Label>State<span>*</span></Form.Label>
                                        <Form.Select className="formControl" placeholder="please select">
                                            <option>please select</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Row>
                                <Row className="mb-4 m-2">
                                    <Form.Group controlId="City" as={Col} md="6">
                                        <Form.Label>City<span>*</span></Form.Label>
                                        <Form.Control className="formControl" type="text" placeholder="Please enter Address"></Form.Control>
                                    </Form.Group>
                                    <Form.Group controlId="Pincode" as={Col} md="6">
                                        <Form.Label>Pincode<span>*</span></Form.Label>
                                        <Form.Control className="formControl" type="tel" placeholder="Please enter Pincode"></Form.Control>
                                    </Form.Group>
                                </Row>
                                <div className="cardHeading2">Previous School Information</div>
                                <Row className="mb-4 m-2">
                                    <Form.Group controlId="SchoolName" as={Col} md="6">
                                        <Form.Label>School Name</Form.Label>
                                        <Form.Control className="formControl" type="text" placeholder="Please enter School Name"></Form.Control>
                                    </Form.Group>
                                    <Form.Group controlId="Board" as={Col} md="6">
                                        <Form.Label>Board</Form.Label>
                                        <Form.Select className="formControl" placeholder="please select">
                                            <option>please select</option>
                                            <option value="1">CBSE</option>
                                            <option value="2">ICSE</option>
                                            <option value="3">IB</option>
                                            <option value="4">IGCSE</option>
                                            <option value="1">State Board</option>
                                            <option value="2">NA</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Row>
                                <Row className="mb-4 m-2">
                                    <Form.Group controlId="classAtd" as={Col} md="6">
                                        <Form.Label>Class Attended</Form.Label>
                                        <Form.Select className="formControl" placeholder="please select">
                                            <option>please select</option>
                                            <option value="1">Pre-School</option>
                                            <option value="2">KG1</option>
                                            <option value="3">KG2</option>
                                            <option value="4">I</option>
                                            <option value="5">II</option>
                                            <option value="6">III</option>
                                            <option value="7">IV</option>
                                            <option value="8">V</option>
                                            <option value="9">VI</option>
                                            <option value="10">VII</option>
                                            <option value="11">VIII</option>
                                            <option value="12">IX</option>
                                            <option value="13">X</option>
                                            <option value="14">XI</option>
                                            <option value="15">XII</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group controlId="ReasonforTC" as={Col} md="6">
                                        <Form.Label>Reason for TC</Form.Label>
                                        <Form.Control className="formControl" type="text" placeholder="Please enter Reason for TC"></Form.Control>
                                    </Form.Group>
                                </Row>
                                <div className="cardHeading3">Additional Information</div>
                                <Row className="mb-4 m-2">
                                    <Form.Group controlId="SiblingName" as={Col} md="6">
                                        <Form.Label>Sibling’s Name</Form.Label>
                                        <Form.Control className="formControl" type="text" placeholder="Please enter Sibling Name"></Form.Control>
                                    </Form.Group>
                                    <Form.Group controlId="SiblingAge" as={Col} md="6">
                                        <Form.Label>Sibling’s Age</Form.Label>
                                        <Form.Control className="formControl" type="tel" placeholder="Please enter Sibling Age"></Form.Control>
                                    </Form.Group>
                                </Row>
                                <Row className="mb-4 m-2">
                                    <Form.Group controlId="SiblingSchoolName" as={Col} md="6">
                                        <Form.Label>Sibling’s School Name</Form.Label>
                                        <Form.Control className="formControl" type="text" placeholder="Please enter Sibling School Name"></Form.Control>
                                    </Form.Group>
                                    <Form.Group controlId="SiblingClass" as={Col} md="6">
                                        <Form.Label>Sibling’s Class</Form.Label>
                                        <Form.Select className="formControl" placeholder="please select">
                                            <option>please select</option>
                                            <option value="1">Pre-School</option>
                                            <option value="2">KG1</option>
                                            <option value="3">KG2</option>
                                            <option value="4">I</option>
                                            <option value="5">II</option>
                                            <option value="6">III</option>
                                            <option value="7">IV</option>
                                            <option value="8">V</option>
                                            <option value="9">VI</option>
                                            <option value="10">VII</option>
                                            <option value="11">VIII</option>
                                            <option value="12">IX</option>
                                            <option value="13">X</option>
                                            <option value="14">XI</option>
                                            <option value="15">XII</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Row>
                                <div className="cardHeading4">Documents(Only JPG,PNG,PDF,DOC,Excel formats are allowed)</div>
                                <Row className="mb-4 m-2">
                                    <Form.Group controlId="BirthCertificate" as={Col} md="4">
                                        <div className="profileImgCard">
                                            {file ? (<div className="profileImg">
                                                <img src={file} />
                                                <input type="file" id="BirthCertificate" accept=".jpg , .png, .pdf, .xls" onChange={photoupload} />
                                            </div>) : (<div className="custom-file">
                                                <label for="BirthCertificate">Birth Certificate</label>
                                                <input type="file" id="BirthCertificate" accept=".jpg , .png, .pdf, .xls" onChange={photoupload} />
                                            </div>)}

                                        </div>
                                    </Form.Group>
                                    <Form.Group controlId="PreviousMarksheet" as={Col} md="4">
                                        <Form.Label>Previous Marksheet</Form.Label>
                                        <Form.Control type="file" />
                                    </Form.Group>
                                    <Form.Group controlId="TransferCertificate" as={Col} md="4">
                                        <Form.Label>Transfer Certificate</Form.Label>
                                        <Form.Control type="file" />
                                    </Form.Group>
                                </Row>

                                <table className="table table-borderless">
                                    <thead>
                                        <tr>
                                            <th>Document Name</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Birth Certificate</td>
                                            <td><a>View Document</a></td>
                                        </tr>
                                        <tr>
                                            <td>Previous Marksheet</td>
                                            <td><a>View Document</a></td>
                                        </tr>
                                        <tr>
                                            <td>Transfer Certificate</td>
                                            <td><a>View Document</a></td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div class="form-check form-check-inline mb-3">
                                    <input class="form-check-input" type="checkbox" id="Checkbox1" value="option1" />
                                    <label class="form-check-label" for="Checkbox1"> Parent/Guardian Undertaking<span>*</span></label>
                                    <div> I hereby accept that, I will ascertain the Academic/Attendance progress of the Student from time to time from the School and also pay the damages if any caused by the Student.</div>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" id="Checkbox2" value="option2" />
                                    <label class="form-check-label" for="Checkbox2">Student Undertaking<span>*</span></label>
                                    <div> I hereby accept that I will abide by the Administrative/Academic/Examination rules during my study in the School. I hereby accept that during my stay in School, I will maintain discipline, and pay the damages caused by me.</div>
                                </div>
                                <button>Update</button>
                            </Form>
                        </div>
                        <div class="tab-pane fade" id="parent" role="tabpanel" aria-labelledby="parent-tab">
                            <Form autoComplete="off" onSubmit={formik.handleSubmit}>
                                <Row className="mb-4 m-2">
                                    <Form.Group  as={Col} md="6">
                                        <Form.Label>Father's Name</Form.Label>
                                        <Form.Control className="formControl" type="text" placeholder="Please enter Father Name" id="parentName"  onChange={formik.handleChange} value={formik.values.parentName}/>
                                        {formik.errors.parentName ? <div className="errorode">{formik.errors.parentName}</div> : null}
                                    </Form.Group>
                                    <Form.Group as={Col} md="6">
                                        <Form.Label>Father's Qualification</Form.Label>
                                        <Form.Control className="formControl" type="text" placeholder="Please enter Father Qualification" id="parenetQual" onChange={formik.handleChange} value={formik.values.parenetQual}/>
                                        {formik.errors.parenetQual ? <div className="errorode">{formik.errors.parenetQual}</div> : null}
                                    </Form.Group>
                                </Row>
                                <Row className="mb-4 m-2">
                                    <Form.Group  as={Col} md="6">
                                        <Form.Label>Father’s Occupation</Form.Label>
                                        <Form.Control className="formControl" type="text" placeholder="Please enter Father Occupation" id="paretOcc" onChange={formik.handleChange} value={formik.values.paretOcc}/>
                                        {formik.errors.paretOcc ? <div className="errorode">{formik.errors.paretOcc}</div> : null}
                                    </Form.Group>
                                    <Form.Group controlId="FatherIncome" as={Col} md="6">
                                        <Form.Label>Father’s Income</Form.Label>
                                        <Form.Select className="formControl" placeholder="please select">
                                            <option>please select</option>
                                            <option value='1 Lakh bellow'>&lt;&nbsp;1 Lakh</option>
                                            <option value='1 Lakh - 3 Lakhs'>1 Lakh - 3 Lakhs</option>
                                            <option value='3 Lakhs - 5 Lakhs'>3 Lakhs - 5 Lakhs</option>
                                            <option value='5 Lakhs - 10 Lakhs'>5 Lakhs - 10 Lakhs</option>
                                            <option value='10 Lakhs'>10 Lakh +</option>
                                            <option value='notapply'>Not Applicable</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Row>
                                <Row className="mb-4 m-2">
                                    <Form.Group controlId="FatherMobile" as={Col} md="6">
                                        <Form.Label>Father’s Mobile</Form.Label>
                                        <Form.Control className="formControl" type="tel" placeholder="Please enter Father MobileNumber"></Form.Control>
                                    </Form.Group>
                                    <Form.Group controlId="FatherAadhaar" as={Col} md="6">
                                        <Form.Label>Father’s Aadhaar Card</Form.Label>
                                        <Form.Control className="formControl" type="tel" placeholder="Please enter Father Aadhaar Card"></Form.Control>
                                    </Form.Group>
                                </Row>
                                <Row className="mb-4 m-2">
                                    <Form.Group controlId="FatherEmail" as={Col} md="6">
                                        <Form.Label>Father’s Email</Form.Label>
                                        <Form.Control className="formControl" type="email" placeholder="Please enter Father Mail"></Form.Control>
                                    </Form.Group>
                                    <Form.Group controlId="MotherName" as={Col} md="6">
                                        <Form.Label>Mother’s Name</Form.Label>
                                        <Form.Control className="formControl" type="text" placeholder="Please enter Mother Name"></Form.Control>
                                    </Form.Group>
                                </Row>
                                <Row className="mb-4 m-2">
                                    <Form.Group controlId="MotherQualification" as={Col} md="6">
                                        <Form.Label>Mother’s Qualification</Form.Label>
                                        <Form.Control className="formControl" type="text" placeholder="Please enter Mother Qualification"></Form.Control>
                                    </Form.Group>
                                    <Form.Group controlId="MotherName" as={Col} md="6">
                                        <Form.Label>Mother’s Name</Form.Label>
                                        <Form.Control className="formControl" type="text" placeholder="Please enter Mother Name"></Form.Control>
                                    </Form.Group>
                                </Row>
                                <Row className="mb-4 m-2">
                                    <Form.Group controlId="MotherIncome" as={Col} md="6">
                                        <Form.Label>Mother’s Income</Form.Label>
                                        <Form.Select className="formControl" placeholder="please select">
                                            <option>please select</option>
                                            <option value='1 Lakh bellow'>&lt;&nbsp;1 Lakh</option>
                                            <option value='1 Lakh - 3 Lakhs'>1 Lakh - 3 Lakhs</option>
                                            <option value='3 Lakhs - 5 Lakhs'>3 Lakhs - 5 Lakhs</option>
                                            <option value='5 Lakhs - 10 Lakhs'>5 Lakhs - 10 Lakhs</option>
                                            <option value='10 Lakhs'>10 Lakh +</option>
                                            <option value='notapply'>Not Applicable</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group controlId="MotherMobile" as={Col} md="6">
                                        <Form.Label>Mother’s Mobile</Form.Label>
                                        <Form.Control className="formControl" type="text" placeholder="Please enter Mother MobileNumber"></Form.Control>
                                    </Form.Group>
                                </Row>
                                <Row className="mb-4 m-2">
                                    <Form.Group controlId="MotherAadhaar" as={Col} md="6">
                                        <Form.Label>Mother’s Aadhaar Card</Form.Label>
                                        <Form.Control className="formControl" type="tel" placeholder="Please enter Mother Aadhaar Card"></Form.Control>
                                    </Form.Group>
                                    <Form.Group controlId="MotherEmail" as={Col} md="6">
                                        <Form.Label>Mother’s Email</Form.Label>
                                        <Form.Control className="formControl" type="email" placeholder="Please enter Mother Mail"></Form.Control>
                                    </Form.Group>
                                </Row>
                                <Row className="mb-4 m-2">
                                    <Form.Group controlId="Address" as={Col} md="6">
                                        <Form.Label>Address</Form.Label>
                                        <Form.Control className="formControl" type="text" placeholder="Please enter Address"></Form.Control>
                                    </Form.Group>
                                    <Form.Group controlId="Pincode" as={Col} md="6">
                                        <Form.Label>Pincode</Form.Label>
                                        <Form.Control className="formControl" type="tel" placeholder="Please enter Pincode"></Form.Control>
                                    </Form.Group>
                                </Row>
                                <Row className="mb-4 m-2">
                                    <Form.Group controlId="GardianName" as={Col} md="6">
                                        <Form.Label>Gardian’s Name</Form.Label>
                                        <Form.Control className="formControl" type="text" placeholder="Please enter Gardian Name"></Form.Control>
                                    </Form.Group>
                                    <Form.Group controlId="GardianQualification" as={Col} md="6">
                                        <Form.Label>Gardian’s Qualification</Form.Label>
                                        <Form.Control className="formControl" type="text" placeholder="Please enter Gardian Qualification"></Form.Control>
                                    </Form.Group>
                                </Row>
                                <Row className="mb-4 m-2">
                                    <Form.Group controlId="GardianOccupation" as={Col} md="6">
                                        <Form.Label>Gardian’s Occupation</Form.Label>
                                        <Form.Control className="formControl" type="text" placeholder="Please enter Gardian Occupation"></Form.Control>
                                    </Form.Group>
                                    <Form.Group controlId="GardianMobile" as={Col} md="6">
                                        <Form.Label>Gardian’s Mobile</Form.Label>
                                        <Form.Control className="formControl" type="tel" placeholder="Please enter Gardian MobileNumber"></Form.Control>
                                    </Form.Group>
                                </Row>
                                <Row className="mb-4 m-2">
                                    <Form.Group controlId="GuardianSalary" as={Col} md="6">
                                        <Form.Label>Guardian's Salary</Form.Label>
                                        <Form.Control className="formControl" type="tel" placeholder="Please enter Gardian Salary"></Form.Control>
                                    </Form.Group>
                                    <Form.Group controlId="GardianEmail" as={Col} md="6">
                                        <Form.Label>Gardian’s Email</Form.Label>
                                        <Form.Control className="formControl" type="email" placeholder="Please enter Gardian Mail"></Form.Control>
                                    </Form.Group>
                                </Row>
                                <Row className="mb-4 m-2">
                                    <Form.Group controlId="GuardianAadhar" as={Col} md="6">
                                        <Form.Label>Guardian Aadhar Card</Form.Label>
                                        <Form.Control className="formControl" type="tel" placeholder="Please enter Gardian Aadhar"></Form.Control>
                                    </Form.Group>
                                    <Form.Group controlId="radioParent" as={Col} md="6">
                                        <Form.Label>Are you a single parent?</Form.Label>
                                        <div className="radioBtnGroup">
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="radio1" />
                                                <label className="form-check-label" for="radio1">
                                                    Yes
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="radio2" checked />
                                                <label className="form-check-label" for="radio2">
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </Form.Group>
                                </Row>
                                <div className="d-flex">
                                    <button type="submit" className="updateBtn justify-content-center">Submit</button>
                                </div>  
                            </Form>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}
export default memo(StudentProfileComp);