import React, { useEffect } from 'react'
import { Container, Row, Col, Card, Form, FormControl, InputGroup } from 'react-bootstrap'
import logo from "assets/img/logo.png";
import userPics from "assets/img/faces/face-2.jpg";
import ButtonView from 'components/Button';

function Questions() {
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
                            <h2 className="text ">Questions</h2>
                            <p className="text-center">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.</p>
                        </Row>
                        <Row className="mt-5 detail offset-md-1">
                            <Col md={11}>
                                <Card className="text-center p-md-5 p-sm-2">

                                    <Container>
                                        <Form className="text-left">
                                            <div className="border-bottom pb-3">
                                                <Row className="mb-3">
                                                    <Col><h5>Question 1</h5></Col>
                                                </Row>
                                                <Row className="mb-3">
                                                    <Col>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.</Col>
                                                </Row>
                                                <Row>
                                                    <Col md={6}>
                                                        <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                                            <Form.Check type="radio" name="first" label="Lorem ipsum dolor sit" />
                                                        </Form.Group>
                                                    </Col>
                                                    <Col md={6}>
                                                        <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                                            <Form.Check type="radio" name="first" label="Lorem ipsum dolor sit" />
                                                        </Form.Group>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col md={6}>
                                                        <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                                            <Form.Check type="radio" name="first" label="Lorem ipsum dolor sit" />
                                                        </Form.Group>
                                                    </Col>
                                                    <Col md={6}>
                                                        <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                                            <Form.Check type="radio" name="first" label="Lorem ipsum dolor sit" />
                                                        </Form.Group>
                                                    </Col>
                                                </Row>

                                            </div>
                                            <div className="border-bottom pb-3 mt-5">
                                                <Row className="mb-3">
                                                    <Col><h5>Question 2</h5></Col>
                                                </Row>
                                                <Row className="mb-3">
                                                    <Col>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.</Col>
                                                </Row>
                                                <Row>
                                                    <Col md={6}>
                                                        <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                                            <Form.Check type="radio" name="second" label="Lorem ipsum dolor sit" />
                                                        </Form.Group>
                                                    </Col>
                                                    <Col md={6}>
                                                        <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                                            <Form.Check type="radio" name="second" label="Lorem ipsum dolor sit" />
                                                        </Form.Group>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col md={6}>
                                                        <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                                            <Form.Check type="radio" name="second" checked label="Lorem ipsum dolor sit" />
                                                        </Form.Group>
                                                    </Col>
                                                    <Col md={6}>
                                                        <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                                            <Form.Check type="radio" name="second" label="Lorem ipsum dolor sit" />
                                                        </Form.Group>
                                                    </Col>
                                                </Row>

                                            </div>
                                            <div className="border-bottom pb-3 mt-5">
                                                <Row className="mb-3">
                                                    <Col><h5>Question 3</h5></Col>
                                                </Row>
                                                <Row className="mb-3">
                                                    <Col>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.</Col>
                                                </Row>
                                                <Row>
                                                    <Col md={6}>
                                                        <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                                            <Form.Check type="radio" name="third" label="Lorem ipsum dolor sit" />
                                                        </Form.Group>
                                                    </Col>
                                                    <Col md={6}>
                                                        <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                                            <Form.Check type="radio" name="third" label="Lorem ipsum dolor sit" />
                                                        </Form.Group>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col md={6}>
                                                        <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                                            <Form.Check type="radio" name="third" checked label="Lorem ipsum dolor sit" />
                                                        </Form.Group>
                                                    </Col>
                                                    <Col md={6}>
                                                        <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                                            <Form.Check type="radio" name="third" label="Lorem ipsum dolor sit" />
                                                        </Form.Group>
                                                    </Col>
                                                </Row>

                                            </div>
                                        </Form>
                                    </Container>

                                    <Card.Body>
                                        <Row className={'pt-3 justify-content-center'} noGutters>
                                            <Col md={3} className="mr-2 mb-3 justify-content-center">
                                                <a href="#/login">
                                                    <ButtonView
                                                        variant={'danger'}
                                                        title={'Cancel'}
                                                        block={true}
                                                    />
                                                </a>
                                            </Col>
                                            <Col md={3} className="ml-2 justify-content-center">
                                                <a href="#/confirmation">
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

export default Questions