import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Card, Image } from 'react-bootstrap'
import { Formik } from 'formik'
import logo from "assets/img/logo.png";
import SemanticInput from 'components/SemanticInput';
import ButtonView from 'components/Button'
import { useToasts } from 'react-toast-notifications';
import Amplify, { API, Auth } from 'aws-amplify'
import { useDispatch, useSelector } from "react-redux";
import { saveUserData } from 'actions/users';
import BeatLoader from "react-spinners/BeatLoader";

function Users() {


  let [loading, setLoading] = useState(false);
  let [color, setColor] = useState("#131313");

  const { addToast } = useToasts()
  const dispatch = useDispatch()
  const users = useSelector(state => state.users)
  const userData = users.user;
  const [error, setError] = useState('')

  function searchUser(values) {
    setLoading(true)
    const apiName = 'BASE';
    const path = '/getUserByCriteria';
    const myInit = {
      body: {
        email: values.search
      },
      headers: {}
    };

    API
      .post(apiName, path, myInit)
      .then(response => {
        // Add your code here   
        ///if user not found
        if (!response.user) {
          setLoading(false)
          addToast("User not found!", {
            appearance: 'error',
            autoDismiss: true
          });
        }
        else {
          setLoading(false)
          ////saved data also in local storage for lost data when reloading page 
          localStorage.setItem("user_data",JSON.stringify(response.user))    
          ///// save data in redux     
          dispatch(saveUserData({
            data: response.user,
            successCb: (res) => {
              renderUsers();
            }
          }))
        }
      })
      .catch(error => {
        addToast(error, { appearance: 'error', autoDismiss: true });
      });
  }

  function renderUsers() {
    if (userData !== null) {
      return (
        
        <Col md={6}>
          <a href="#/user-details">
          {/* <div className="sweet-loading">
            <button onClick={() => setLoading(!loading)}>Toggle Loader</button>
            <input value={color} onChange={(input) => setColor(input.target.value)} placeholder="Color of the loader" />

           
          </div> */}
            <Card>
              <Card.Body>
                <Row>
                  <Col md={10}>
                    <Card.Text>
                      {userData.firstName} {userData.lastName}
                    </Card.Text>
                    <Card.Title>{userData.addressLine1} {userData.addressLine2} </Card.Title>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </a>
        </Col>
      )
    }
  }

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
              enableReinitialize={true}
              onSubmit={async (values, { setSubmitting, resetForm }) => {
                searchUser(values)
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
                        placeholder={'Enter email address'}
                        position={'left'}
                        name="search"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.search}
                        className={touched.search && errors.search ? "error" : null}
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
                        onClick={handleSubmit}
                      />
                    </Col>
                  </Row>

                </>
              )}
            </Formik>
              <Row>
                <Col md={12} className="text-center mt-5">
                  <BeatLoader color={color} loading={loading}  size={30} />
                </Col>
              </Row>
            <Row className="mt-5 users">
              
              {renderUsers()}

            </Row>
          </div>

        </Col>
      </Row>

    </Container>
  )
}

export default Users