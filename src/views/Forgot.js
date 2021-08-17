import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Formik } from 'formik'
import logo from "assets/img/logo.png";
import SemanticInput from 'components/SemanticInput';
import ButtonView from 'components/Button';

function Forgot() {

    return (
        <Container >
            <Row className="justify-content-center mt-5">
                <a href="#/login">
                    <img className="img-fluid logo" src={logo} />
                </a>
            </Row>
            <Row md={12}>
                <Col md={6} className="mt-5 offset-md-3" sm={6}>
                    <div class="dash-container">
                        <Row className="justify-content-center mb-5">
                            <h2 className="text ">Forgot Password!</h2>
                        </Row>
                        <Formik
                            initialValues={{ email: "", password: "" }}
                            // Hooks up our validationSchema to Formik 
                            enableReinitialize={true}
                            onSubmit={async (values, { setSubmitting, resetForm }) => {
                                loginUser(values)
                            }}>
                            {({
                                values,
                                errors,
                                touched,
                                handleChange,
                                handleBlur,
                                handleSubmit,
                                isSubmitting,
                            }) => (
                                <>
                                    <Row className="justify-content-center" noGutters>
                                        <Col md={9}>
                                            <SemanticInput
                                                placeholder={'Enter your email address'}
                                                icon={'envelope'}
                                                position={'left'}
                                                name="email"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.email}
                                                className={touched.email && errors.email ? "error" : null}
                                                onKeyUp={(e) => e.keyCode === 13 ? handleSubmit() : null}
                                            />
                                            {touched.email && errors.email ? (
                                                <div className="error-message">{errors.email}</div>
                                            ) : null}
                                        </Col>
                                    </Row>

                                    <Row className={'pt-3 justify-content-center'} noGutters>
                                        <Col md={6} className="d-flex justify-content-center">
                                            <ButtonView
                                                variant={'primary'}
                                                title={'Submit'}
                                                block={true}
                                            // onClick={handleSubmit}
                                            />
                                        </Col>
                                    </Row>
                                </>
                            )}
                        </Formik>
                    </div>
                </Col>
                <Col md={2} sm={3} />
            </Row>
        </Container>
    )
}

export default Forgot