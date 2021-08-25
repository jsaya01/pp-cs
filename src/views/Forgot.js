import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Formik } from 'formik'
import logo from "assets/img/logo.png";
import SemanticInput from 'components/SemanticInput';
import { useToasts } from 'react-toast-notifications';
import ButtonView from 'components/Button'
import { CognitoUser } from "amazon-cognito-identity-js";
import UserPool from "../UserPool";

function Forgot() {
    const { addToast } = useToasts()
    function forgotPass(values) {

        const getUser = () => {
            return new CognitoUser({
                Username: values.username,
                Pool: UserPool
            });
        };

        getUser().forgotPassword({
            onSuccess: data => {
                window.location.href = '#change-password'
            },
            onFailure: err => {
                console.error("onFailure:", err);
                addToast(err.message, {
                    appearance: 'error',
                    autoDismiss: true
                });
            },
            inputVerificationCode: data => {
                localStorage.setItem("username", values.username)
                window.location.href = '#change-password'
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
                            <h2 className="text ">Forgot Password!</h2>
                        </Row>
                        <Formik
                            initialValues={{ email: "" }}
                            // Hooks up our validationSchema to Formik 
                            enableReinitialize={true}
                            onSubmit={async (values) => {
                                forgotPass(values)
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
                                                placeholder={'Enter your username '}
                                                icon={'envelope'}
                                                position={'left'}
                                                name="username"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.username}
                                                className={touched.username && errors.username ? "error" : null}
                                                onKeyUp={(e) => e.keyCode === 13 ? handleSubmit() : null}
                                            />
                                            {touched.username && errors.username ? (
                                                <div className="error-message">{errors.username}</div>
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

export default Forgot