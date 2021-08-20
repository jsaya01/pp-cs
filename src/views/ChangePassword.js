import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Formik } from 'formik'
import logo from "assets/img/logo.png";
import SemanticInput from 'components/SemanticInput';
import ButtonView from 'components/Button'
import { useToasts } from 'react-toast-notifications';
import { CognitoUser } from "amazon-cognito-identity-js";
import UserPool from "../UserPool";

function ChangePassword() {
    const { addToast } = useToasts()
    function resetPassword(values) {
        console.log(values.code)
        const getUser = () => {
            let username = localStorage.getItem("username");
            return new CognitoUser({
                Username:username,
                Pool: UserPool
            });
        };

        getUser().confirmPassword(values.code, values.password, {
            onSuccess: data => {
              console.log("onSuccess:", data);
              window.location.href = '#login'
            },
            onFailure: err => {
                addToast(err.message, {
                    appearance: 'error',
                    autoDismiss: true
                });
            }
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
                            <h2 className="text ">Reset Password!</h2>
                        </Row>
                        <Formik
                            initialValues={{ code: "",password: "" }}
                            // Hooks up our validationSchema to Formik 
                            enableReinitialize={true}
                            onSubmit={async (values) => {
                                resetPassword(values)
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
                                                placeholder={'Enter your code '}
                                                icon={'envelope'}
                                                position={'left'}
                                                name="code"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.code}
                                                className={touched.code && errors.code ? "error" : null}
                                                onKeyUp={(e) => e.keyCode === 13 ? handleSubmit() : null}
                                            />
                                            {touched.code && errors.code ? (
                                                <div className="error-message">{errors.code}</div>
                                            ) : null}
                                        </Col>

                                    </Row>

                                    <Row className="justify-content-center" noGutters>
                                        <Col md={9}>
                                            <SemanticInput
                                                placeholder={'Enter your password '}
                                                icon={'envelope'}
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

                                  

                                    <Row className={'pt-3 justify-content-center'} noGutters>
                                        <Col md={6} className="d-flex justify-content-center">

                                            <ButtonView
                                                variant={'primary'}
                                                title={'Submit'}
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

export default ChangePassword