import React, { useEffect } from 'react'
import { Container, Row, Col, Card, Image } from 'react-bootstrap'
import { Formik } from 'formik'
import logo from "assets/img/logo.png";
import userPics from "assets/img/faces/face-2.jpg";
import SemanticInput from 'components/SemanticInput';
import ButtonView from 'components/Button'
import Amplify, { API,  Auth } from 'aws-amplify'


function Users() { 
  const apiName = 'BASE';
  const path = '/pools/sport/NFL/true'; 
  const myInit = {headers:{}};
  
  API
    .get(apiName, path, myInit)
    .then(response => {
      // Add your code here
      console.log(response)
    })
    .catch(error => {
      console.log(error);
      console.log(error.message)
   });



  return (
    <Container >
      <Row className="justify-content-center mt-5">
        <a href="#/login">
          <img className="img-fluid logo" src={logo} />
        </a>
      </Row>
      <Row md={12} className="pb-5 mb-5">
        <Col md={10} className="mt-5 offset-md-1" sm={6}>
          <div className="dash-container">
            <Row className="justify-content-center mb-5">
              <h2 className="text ">User Search!</h2>
              <p className="text-center">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.</p>
            </Row>
            <Formik
              initialValues={{ search: "" }}
              // Hooks up our validationSchema to Formik 
              enableReinitialize={true}
            >
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
                        placeholder={'Search'}
                        position={'left'}
                        name="search"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        className={touched.email && errors.email ? "error" : null}
                        onKeyUp={(e) => e.keyCode === 13 ? handleSubmit() : null}
                      />

                    </Col>
                  </Row>

                  <Row className={'pt-3 justify-content-center'} noGutters>
                    <Col md={6} className="d-flex justify-content-center">
                      <ButtonView
                        variant={'primary'}
                        title={'Search'}
                        block={true}
                      // onClick={handleSubmit}
                      />
                    </Col>
                  </Row>

                </>
              )}
            </Formik>

            <Row className="mt-5 users">
              <Col md={6}>
                <a href="#/user-details">
                  <Card>
                    <Card.Body>
                      <Row>
                        <Col md={2}>
                          <Image src={userPics} roundedCircle />
                        </Col>
                        <Col md={10}>
                          <Card.Text>
                            Sophie Garnier
                                </Card.Text>
                          <Card.Title>Demo Street, House No 101 123456 </Card.Title>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </a>
              </Col>
              <Col md={6}>
                <a href="#/user-details">
                  <Card>
                    <Card.Body>
                      <Row>
                        <Col md={2}>
                          <Image src={userPics} roundedCircle />
                        </Col>
                        <Col md={10}>
                          <Card.Text>
                            Sophie Garnier
                                </Card.Text>
                          <Card.Title>Demo Street, House No 101 123456 </Card.Title>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </a>
              </Col>
              <Col md={6}>
                <a href="#/user-details">
                  <Card>
                    <Card.Body>
                      <Row>
                        <Col md={2}>
                          <Image src={userPics} roundedCircle />
                        </Col>
                        <Col md={10}>
                          <Card.Text>
                            Sophie Garnier
                                </Card.Text>
                          <Card.Title>Demo Street, House No 101 123456 </Card.Title>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </a>
              </Col>
              <Col md={6}>
                <a href="#/user-details">
                  <Card>
                    <Card.Body>
                      <Row>
                        <Col md={2}>
                          <Image src={userPics} roundedCircle />
                        </Col>
                        <Col md={10}>
                          <Card.Text>
                            Sophie Garnier
                                </Card.Text>
                          <Card.Title>Demo Street, House No 101 123456 </Card.Title>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </a>
              </Col>
              <Col md={6}>
                <a href="#/user-details">
                  <Card>
                    <Card.Body>
                      <Row>
                        <Col md={2}>
                          <Image src={userPics} roundedCircle />
                        </Col>
                        <Col md={10}>
                          <Card.Text>
                            Sophie Garnier
                                </Card.Text>
                          <Card.Title>Demo Street, House No 101 123456 </Card.Title>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </a>
              </Col>
              <Col md={6}>
                <a href="#/user-details">
                  <Card>
                    <Card.Body>
                      <Row>
                        <Col md={2}>
                          <Image src={userPics} roundedCircle />
                        </Col>
                        <Col md={10}>
                          <Card.Text>
                            Sophie Garnier
                                </Card.Text>
                          <Card.Title>Demo Street, House No 101 123456 </Card.Title>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </a>
              </Col>
            </Row>
          </div>

        </Col>
      </Row>

    </Container>
  )
}

export default Users