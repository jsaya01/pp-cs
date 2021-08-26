import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Card, Form, FormControl, InputGroup } from 'react-bootstrap'
import logo from "assets/img/logo.png";
import ButtonView from 'components/Button';
import Amplify, { API, Auth } from 'aws-amplify'
import { useToasts } from 'react-toast-notifications';
import { useDispatch, useSelector } from "react-redux";
import { saveQuestionData } from 'actions/questions'
import { saveUserData } from 'actions/users'
import BeatLoader from "react-spinners/BeatLoader";

function Questions() {

    let [loading, setLoading] = useState(false);
    let [color, setColor] = useState("#131313");

    const { addToast } = useToasts()
    const dispatch = useDispatch()
    const question = useSelector(state => state.questions)
    const questionData = question.questions

    const users = useSelector(state => state.users)
    if (users.user == null)
    var user_data = JSON.parse(localStorage.getItem("user_data"))
    else
        var user_data = users.user;

    const userData = user_data;


    // const poolId = users.user;

    const [questions, setQuestions] = useState([])
    const [error, setError] = useState('')

    function getQeustionData() {
        setLoading(true)
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
                            setLoading(false)
                        }
                    }))
                }
                else {
                    setLoading(false)
                    setError('No questions found')
                }
            })
            .catch(error => {
                setLoading(false)
                console.log(error)
                setError('No questions found')
            });
    }
    useEffect(() => {
        getQeustionData()
    }, [])

    function onSave() {
        setLoading(true)
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
                setLoading(false)
                if (response.status === "success") {
                    addToast("Success", { appearance: 'success', autoDismiss: true });
                    document.location.href = "#/confirmation";
                }
                else {
                    addToast("error", { appearance: 'error', autoDismiss: true });
                }
            })
            .catch(error => {
                setLoading(false)
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
                     {/* ///// Loader Here*/}
                     <Row>
                        <Col md={12} className="text-center mt-5">
                            <BeatLoader color={color} loading={loading}  size={30} />
                        </Col>
                    </Row>
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
                                                   
                                                    <ButtonView
                                                        variant={'danger'}
                                                        title={'Cancel'}
                                                        block={true}
                                                        onClick={cancleSubmit}
                                                    />
                                                   
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
                                        {/* ///// Loader Here*/}
                                        <Row>
                                            <Col md={12} className="text-center mt-5">
                                                <BeatLoader color={color} loading={loading}  size={30} />
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