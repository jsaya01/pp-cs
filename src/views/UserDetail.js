import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Card, Image, Table, InputGroup } from 'react-bootstrap'
import { Formik } from 'formik'
import logo from "assets/img/logo.png";
import ButtonView from 'components/Button';
import { useDispatch, useSelector } from "react-redux";
import { saveUserData } from 'actions/users'

function UserDetail() {
    const dispatch = useDispatch()
    const users = useSelector(state => state.users)

    if (users.user == null)
        var user_data = JSON.parse(localStorage.getItem("user_data"))
    else
        var user_data = users.user;

    const userData = user_data;

    const [isCheckedAddress, setIsCheckedAddress] = useState(false);
    const [isCheckedPincode, setIsCheckedPincode] = useState(false);
    const [isCheckedEmail, setIsCheckedEmail] = useState(false);

    const handleOnChangeAddress = () => {
        setIsCheckedAddress(!isCheckedAddress);
    };
    const handleOnChangePincode = () => {
        setIsCheckedPincode(!isCheckedPincode);
    };

    const handleOnChangeEmail = () => {
        setIsCheckedEmail(!isCheckedEmail);
    };

    function questionButton() {
        if (isCheckedAddress && isCheckedPincode && isCheckedEmail) {
            return (
                <a href="#/questions">
                    <ButtonView
                        variant={'primary'}
                        title={'Continue'}
                        block={true}
                    />
                </a>
            )

        }
        else {
            return (
                <ButtonView
                    variant={'success'}
                    title={'Continue'}
                    block={true}
                />

            )
        }
    }
    function cancleSubmit(){
        dispatch(saveUserData({
            data: null,
            successCb: (res) => {
                document.location.href="#users";
            }
        }))        
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
                            <h2 className="text ">User Details</h2>
                            <p className="text-center">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.</p>
                        </Row>
                        <Row className="mt-5 detail offset-md-2">
                            <Col md={9}>
                                <Card className="text-center pb-5 pt-2">

                                    <Card.Body>

                                        <Table responsive>
                                            <tbody>
                                                <tr>
                                                    <th></th>
                                                    <th>{userData.firstName}</th>
                                                    <th>Confirmed</th>
                                                </tr>
                                                <tr>
                                                    <td>  <strong className="mr-3">Address</strong></td>
                                                    <td>  {userData.addressLine1} {userData.addressLine2}</td>
                                                    <td>
                                                        <input
                                                            type="checkbox"
                                                            id="address"
                                                            name="address"
                                                            value="Address"
                                                            checked={isCheckedAddress}
                                                            onChange={handleOnChangeAddress}
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>  <strong className="mr-3">Pincode</strong></td>
                                                    <td> {userData.zip}</td>
                                                    <td>
                                                        <input
                                                            type="checkbox"
                                                            id="pincode"
                                                            name="pincode"
                                                            value="Pincode"
                                                            checked={isCheckedPincode}
                                                            onChange={handleOnChangePincode}
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>  <strong className="mr-3">Email</strong></td>
                                                    <td> {userData.email}</td>
                                                    <td>
                                                        <input
                                                            type="checkbox"
                                                            id="email"
                                                            name="email"
                                                            value="Email"
                                                            checked={isCheckedEmail}
                                                            onChange={handleOnChangeEmail}
                                                        />
                                                    </td>
                                                </tr>

                                            </tbody>

                                        </Table>
                                        <Row className={'pt-3 justify-content-center'} noGutters>
                                            <Col md={5} className="mr-2 mb-3 justify-content-center">
                                                
                                                    <ButtonView
                                                        variant={'danger'}
                                                        title={'Cancel'}
                                                        block={true}
                                                        onClick={cancleSubmit}
                                                    />
                                                
                                            </Col>
                                            <Col md={5} className="ml-2 justify-content-center">

                                                {questionButton()}

                                            </Col>
                                        </Row>

                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </div>

                </Col>
            </Row>

        </Container>
    )
}

export default UserDetail