import { Field, Formik } from "formik";
import React, { useState } from "react";
import { Row, Col, Button, Card } from "react-bootstrap";
import '../App.scss'
import './Login.css'
import * as Yup from 'yup';
import { useHistory } from "react-router-dom";


const Login2 = () => {
    const history = useHistory();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        name: '',
        phoneNo: '',
        declaration: false
    })
  

   const  handleSubmitValues = (values) =>{
       if(values?.declaration === false){
           alert("Please Check Declaration")
           return;
       }else{
            history.push("/charts")
       }

    }

    return (
        <>
            <Formik initialValues={formData} enableReinitialize={true}
                validationSchema={Yup.object().shape({
                    password: Yup
                        .string()
                        .required("Please enter your password")
                        .matches(
                            /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
                            "Password must contain at least 8 characters, one uppercase, one number and one special case character"
                        ),
                    confirmPassword: Yup
                        .string()
                        .required("Please confirm your password")
                        .oneOf([Yup.ref('password'), null], "Passwords don't match."),
                    email: Yup.string().required("Please enter your email").
                        matches(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            "Please Enter Correct Email Address"),
                    phoneNo: Yup.string().required("Please Enter PhoneNo").matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, 'Phone number is not valid') .min(10, "to short")
                    .max(10, "to long"),
                    name:Yup.string().required("Please Enter Name"),
                })
                }

                onSubmit={(values, { resetForm }) => {
                    handleSubmitValues(values)
                }}>

                {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values, setFieldValue, resetForm }) => (


                    <form noValidate onSubmit={handleSubmit}>
                        <>
                            <section className="card-container">
                                <h3>Create an account</h3>
                                <div className="c-card">
                                    <Row>
                                        <Col xs={12} sm={12} md={12} lg={10} xl={10} xxl={10} className="mb-3">
                                            <label htmlFor="email" className="form-label">Your email address:</label>
                                            <Field name="email" className="form-control" />
                                            {touched?.email && errors?.email && <small className="text-danger form-text">{errors?.email}</small>}
                                        </Col>
                                        <Col xs={12} sm={12} md={12} lg={10} xl={10} xxl={10} className="mb-3">
                                            <label htmlFor="password" className="form-label">Your Password:</label>
                                            <Field className="form-control" name="password" />
                                            {touched?.password && errors?.password && <small className="text-danger form-text">{errors?.password}</small>}

                                        </Col>
                                        <Col xs={12} sm={12} md={12} lg={10} xl={10} xxl={10} className="mb-3">
                                            <label htmlFor="confirmPassword" className="form-label">Confirm Your Password:</label>
                                            <Field className="form-control" name="confirmPassword" />
                                            {touched?.confirmPassword && errors?.confirmPassword && <small className="text-danger form-text">{errors?.confirmPassword}</small>}
                                        </Col>
                                        <Col xs={12} sm={12} md={12} lg={10} xl={10} xxl={10} className="mb-3">
                                            <label htmlFor="name" className="form-label">Your full name:</label>
                                            <Field className="form-control" name="name" />
                                            {touched?.name && errors?.name && <small className="text-danger form-text">{errors?.name}</small>}
                                        </Col>
                                        <Col xs={12} sm={12} md={12} lg={10} xl={10} xxl={10} className="mb-3">
                                            <label htmlFor="phoneNo" className="form-label">Your Phone number:</label>
                                            <Field className="form-control" name="phoneNo" />
                                            {touched?.phoneNo && errors?.phoneNo && <small className="text-danger form-text">{errors?.phoneNo}</small>}
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={12} sm={12} md={12} lg={10} xl={10} xxl={10} className="mb-3">
                                            <label className="form-label">I read and agree Terms and conditions</label>&nbsp; &nbsp;
                                            <Field type="checkbox" name="declaration" />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={12} sm={12} md={12} lg={4} xl={4} xxl={4} className="mb-3"></Col>
                                        <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6} className="mb-3">
                                            <Button classname="btn btn-sm" type="submit" variant="primary">Create Account</Button>
                                        </Col>
                                        <Col xs={12} sm={12} md={12} lg={2} xl={2} xxl={2} className="mb-3"></Col>
                                    </Row>
                                </div>

                            </section>

                        </>
                    </form>
                )}
            </Formik>
        </>
    )
}
export default Login2