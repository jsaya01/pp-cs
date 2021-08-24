import React, { useEffect } from 'react'
import { Container, Row, Col, Card, Image } from 'react-bootstrap'
import { Formik } from 'formik'
import logo from "assets/img/logo.png";
import userPics from "assets/img/faces/face-2.jpg";
import SemanticInput from 'components/SemanticInput';
import ButtonView from 'components/Button'
import Amplify, { API } from 'aws-amplify'
import aws_exports from '../aws-exports';
Amplify.configure(aws_exports);


function Users() {

  let tokenStr ='eyJraWQiOiJVd1V3Ulc5bnZaU00xdzA4SjczeU42NkxmSWdoWkxsUHczUk9icnNITnBJPSIsImFsZyI6IkhTNTEyIn0.eyJvcmlnaW5fanRpIjoiNWE4ZTgxNWMtZDE1My00YWE1LTkwYjQtMDQxYjhhOWIyMzJlIiwic3ViIjoiMjkyMWZlNjYtODdhYS00NjhlLWJkOTUtOWYxYmViYWJlMTcyIiwiYXVkIjoiM2hxYXJqbjE5ZXJqMjZub2k1YnY3b2s5MXYiLCJldmVudF9pZCI6IjIzNDM5YzM4LTdjNGUtNDlmNC1hNmMwLTU1OGJjNTUyMzYzMiIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjI5Mjg5MDA1LCJpc3MiOiJodHRwczovL2NvZ25pdG8taWRwLnVzLWVhc3QtMi5hbWF6b25hd3MuY29tL3VzLWVhc3QtMl9CaHhZclMyMmIiLCJjb2duaXRvOnVzZXJuYW1lIjoiZGV2QHRlc3QuY29tIiwiZXhwIjoxNjI5MjkyNjA1LCJpYXQiOjE2MjkyODkwMDUsImp0aSI6Ijk0YjE0NzZlLWE5ZDEtNDk0YS1hZmZjLWI5MGYwNjI0YjM4MyIsImVtYWlsIjoiZGV2QHRlc3QuY29tIn0.nmo-0UBGc47CcOsKpGWnSpApvJfxBlDWTdMlckumy0v8B5gUZh0x-DNuWP00qhNWsbi6enFhkjVRwP4fReagoA'
  // const api = 'https://medkpinmsk.execute-api.us-east-2.amazonaws.com/dev/pools/sport/NFL/true';
 
  const apiName = 'NFL';
  const path = ''; 
  const myInit = { // OPTIONAL
      headers: {
        "Access-Control-Allow-Credentials" : true,
        "Access-Control-Allow-Origin" : "*",
        "Authorization": `Bearer ${tokenStr}`
      }, // OPTIONAL
      response: true, 
      // OPTIONAL (return the entire Axios response object instead of only response.data)
      // queryStringParameters: {  // OPTIONAL
      //     name: 'param',
      // },
  };

  console.log(myInit)
  
  API
    .get(apiName, path, myInit)
    .then(response => {
      // Add your code here
      console.log(response)
    })
    .catch(error => {
      console.log(error);
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