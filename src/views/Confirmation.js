import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Formik } from 'formik'
import logo from "assets/img/logo.png";
import ButtonView from 'components/Button';
import { useDispatch, useSelector } from "react-redux";
import { saveUserData } from 'actions/users'


function Confirmation() {

    const users = useSelector(state => state.users)
    const userData = users.user;
    console.log(userData)

    function loginUser(values) {
        window.location.href = '#/users'
    }
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
                            <h2 className="text ">Confirmation</h2>
                            <h5 className="text ">Bet has been placed for {userData.firstName} {userData.lastName}</h5>
                        </Row>
                        <Formik
                            initialValues={{ email: "" }}
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


                                    <Row className={'pt-3 justify-content-center'} noGutters>
                                        <Col md={12} className="d-flex justify-content-center">

                                            <ButtonView
                                                variant={'primary'}
                                                title={'Search User'}
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

export default Confirmation