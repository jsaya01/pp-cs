import React, { useEffect } from 'react'
import { Container, Row, Col, Card, Image, Table, InputGroup } from 'react-bootstrap'
import logo from "assets/img/logo.png";
import userPics from "assets/img/faces/face-2.jpg";
import ButtonView from 'components/Button';

function UserDetail() {
    return (
        <Container >
            <Row className="justify-content-center mt-5">
                <a href="#/login">
                    <img className="img-fluid logo" src={logo} />
                </a>
            </Row>
            <Row md={12} className="pb-5 mb-5">
                <Col md={10} className="mt-5 offset-md-1" sm={6}>
                    <div class="dash-container">
                        <Row className="justify-content-center mb-5">
                            <h2 className="text ">User Details</h2>
                            <p className="text-center">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.</p>
                        </Row>
                        <Row className="mt-5 detail offset-md-2">
                            <Col md={9}>
                                <Card className="text-center pb-5 pt-2">
                                    <Card.Header><Image src={userPics} roundedCircle />  </Card.Header>

                                    <Card.Body>
                                        <Table responsive>
                                            <tbody>
                                                <tr>
                                                    <th></th>
                                                    <th>Sophie Garnier</th>
                                                    <th>Confirmed</th>
                                                </tr>
                                                <tr>
                                                    <td>  <strong className="mr-3">Address</strong></td>
                                                    <td>  Demo Street, House No 101</td>
                                                    <td><InputGroup.Checkbox /></td>
                                                </tr>
                                                <tr>
                                                    <td><strong className="mr-3">Phone</strong></td>
                                                    <td> +1 1234 5678 910</td>
                                                    <td><InputGroup.Checkbox checked /></td>
                                                </tr>
                                                <tr>
                                                    <td>  <strong className="mr-3">Pincode</strong></td>
                                                    <td> 132 465</td>
                                                    <td><InputGroup.Checkbox checked /></td>
                                                </tr>
                                                <tr>
                                                    <td>  <strong className="mr-3">Email</strong></td>
                                                    <td> SophieGarnier911@gmail.com</td>
                                                    <td><InputGroup.Checkbox checked /></td>
                                                </tr>

                                            </tbody>
                                        </Table>
                                        <Row className={'pt-3 justify-content-center'} noGutters>
                                            <Col md={5} className="mr-2 mb-3 justify-content-center">
                                                <a href="#/login">
                                                    <ButtonView
                                                        variant={'danger'}
                                                        title={'Cancel'}
                                                        block={true}
                                                    />
                                                </a>
                                            </Col>
                                            <Col md={5} className="ml-2 justify-content-center">
                                                <a href="#/questions">
                                                    <ButtonView
                                                        variant={'primary'}
                                                        title={'Continue'}
                                                        block={true}
                                                    />
                                                </a>
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