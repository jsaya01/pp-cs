import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Formik } from 'formik'
import logo from "assets/img/logo.png";
import * as Yup from 'yup'
import SemanticInput from 'components/SemanticInput';
import ButtonView from 'components/Button'
import { useToasts } from 'react-toast-notifications';
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import UserPool from "../UserPool";

function Login() {
    const { addToast } = useToasts()
    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email("Enter  valid email address")
            .max(100, "Email must be less than 100 characters")
            .required("Email is required"),
        password: Yup.string()
            .required("Password is required")
    });

    function loginUser(values) {

        const email = new CognitoUser({
            Username: values.email,
            Pool: UserPool,
        });

        const authDetails = new AuthenticationDetails({
            Username: values.email,
            Password: values.password,
        });

        email.authenticateUser(authDetails, {
            onSuccess: (data) => {
                console.log(JSON.stringify(data))
                addToast("Login Success", { appearance: 'success' });
                console.log(data.idToken)
                window.location.href = '#users'
            },
            onFailure: (error) => {
                addToast(error.message, {
                    appearance: 'error',
                    autoDismiss: true
                });
            },
        });
    }

    return (
        <Container >
            <Row className="justify-content-center">
                <img className="img-fluid logo" src={logo} />
            </Row>
            <Row md={12}>
                <Col md={8} className="mt-3 offset-md-2" sm={6}>
                    <div className="dash-container">
                        <Row className="justify-content-center mb-5">
                            <h2 className="text ">Welcome!</h2>
                            <p className="text-center">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.</p>
                        </Row>
                        <Formik
                            initialValues={{ email: "", password: "" }}
                            // Hooks up our validationSchema to Formik 
                            validationSchema={validationSchema}
                            enableReinitialize={true}
                            onSubmit={async (values) => {
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
                                        <Col md={9}>
                                            <SemanticInput
                                                type={"password"}
                                                placeholder={'Enter your password'}
                                                icon={'eye'}
                                                position={'left'}
                                                name="password"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.password}
                                                className={touched.password && errors.password ? "error" : null}
                                                onKeyUp={(e) => e.keyCode === 13 ? handleSubmit() : null}


                                            />
                                            {touched.password && errors.password ? (
                                                <div className="error-message">{errors.password}</div>
                                            ) : null}

                                        </Col>
                                    </Row>
                                    <Row className={'justify-content-center pt-2'} noGutters>
                                        <Col md={9}>
                                            <a href="#/forgot"><p className="text-right font-12">Forgot your password?</p></a>
                                        </Col>
                                    </Row>
                                    <Row className={'pt-3 justify-content-center'} noGutters>
                                        <Col md={6} className="d-flex justify-content-center">
                                            <ButtonView
                                                variant={'primary'}
                                                title={'Login'}
                                                block={true}
                                                onClick={handleSubmit}
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

export default Login