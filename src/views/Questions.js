import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Card, Form, FormControl, InputGroup } from 'react-bootstrap'
import logo from "assets/img/logo.png";
import ButtonView from 'components/Button';
import Amplify, { API, Auth } from 'aws-amplify'
import { useToasts } from 'react-toast-notifications';
import { useDispatch, useSelector } from "react-redux";
import { saveQuestionData } from 'actions/questions'

function Questions() {
    const { addToast } = useToasts()
    const dispatch = useDispatch()
    const question = useSelector(state => state.questions)
    const questionData = question.questions

    const users = useSelector(state => state.users)
    const userData = users.user;


    // const poolId = users.user;

    const [questions, setQuestions] = useState([])
    const [error, setError] = useState('')

    function getQeustionData() {
        const apiName = 'BASE';
        const path = '/pools/sport/NFL/trues';
        const myInit = { headers: {} };

        API
            .get(apiName, path, myInit)
            .then(response => {
                if (response.pools && response.pools.length > 0) {
                    const allQuestion = response.pools[0].questions;
                    setError('')
                    dispatch(saveQuestionData({
                        data: allQuestion,
                        successCb: (res) => {
                            ///result here
                        }
                    }))
                }
                else {
                    setError('No questions found')
                }
            })
            .catch(error => {
                console.log(error)
                setError('No questions found')
            });
    }
    useEffect(() => {
        getQeustionData()
    }, [])

    function onSave() {

        const apiName = 'BASE';
        const path = '/createBetForUser';
        const myInit = {
            headers: {},
            body: {
                "poolId": questions[0].poolId,
                "userId": userData.id,
                "latitude": 112312312,
                "longitude": 123123123,
                "stateCode": "CO",
                "questions": [
                    questions[0]
                ]
            }
        };

        API
            .post(apiName, path, myInit)
            .then(response => {
                if (response.status === "success") {
                    addToast("Success", { appearance: 'success', autoDismiss: true });
                    document.location.href = "#/confirmation";
                }
                else {
                    addToast("error", { appearance: 'error', autoDismiss: true });
                }
            })
            .catch(error => {
                setError('No questions found')
                addToast(error, { appearance: 'error', autoDismiss: true });
            });
    }

    function onOptionChecked({ questionId, questionOptionId, poolId }) {

        let idx = questions.findIndex(ite => ite.questionId === questionId)
        if (idx === -1) {
            questions.push({ questionId, questionOptionId, poolId })
        }
        setQuestions([...questions])
    }

    function renderAnswer(answers) {
        let { options, id, poolId } = answers
        return options.map((answer, qidx) => {

            return (
                <Col md={6}>
                    <Form.Group className="mb-2" controlId="formBasicCheckbox">
                        <Form.Check
                            type="radio"
                            name={id}
                            label={answer.playerName}
                            id={answer.id}
                            onChange={(e) => e.target.value}
                            onClick={() => onOptionChecked({ questionId: id, questionOptionId: answer.id, poolId: poolId })}
                        />
                    </Form.Group>
                </Col>
            )
        })
    }
    function rendorQuestions() {
        if (error != '') {
            return (
                <p>{error}</p>
            )
        }
        return questionData && questionData.map((item, idx) => {
            return (
                <div className="border-bottom pb-3 pt-3">
                    <Row className="mb-3">
                        <Col><h5>Question {item.questionNumber}</h5></Col>
                    </Row>
                    <Row className="mb-3">
                        <Col>{item.question}</Col>
                    </Row>
                    <Row>
                        {renderAnswer(item)}
                    </Row>

                </div>
            )
        })
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

                                            {rendorQuestions()}

                                        </Form>
                                    </Container>

                                    <Card.Body>
                                        {error == '' && (
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
                                                    {/* <a href="#/confirmation"> */}
                                                    <ButtonView
                                                        variant={'primary'}
                                                        title={'Continue'}
                                                        block={true}
                                                        onClick={() => onSave()}
                                                    />
                                                    {/* </a> */}
                                                </Col>
                                            </Row>
                                        )}

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