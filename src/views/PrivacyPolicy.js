import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import logo from "assets/img/logo.png";

function PrivacyPolicy() {
    return (
        <Container >
            <Row className="justify-content-center">
                <a href="#/login">
                    <img className="img-fluid logo" src={logo} />
                </a>
            </Row>
            <Row md={12}>
                <Col md={10} className="mt-3 offset-md-1 pb-5" sm={6}>
                    <div className="dash-container">
                        <Row className="justify-content-center mb-5">
                            <h2 className="text ">Privacy Policy</h2>
                        </Row>
                       <div>
                            <h3>
                                Meet The Team
                            </h3>
                            <p>*Bios and headshots found in google drive folder</p>
                            <h3>
                                About Us
                            </h3>
                            <p>Description: Pick Perfect is a licensed, daily fantasysports app based out of Denver, Colorado.Users sign up and submit an entry into our daily fantasysports pool. Download the app on yourphone, answer 10 questions correctly, and have a chanceto win millions fora $20 entrance fee.Our mobile-first app works on both iOS and Androiddevices. We are here to change the game.</p>
                       
                            <h3>
                                Our Mission
                            </h3>
                            <p>PickPerfect is passionate about giving back. We arefor the people, by the people, and the firstto add a charitable element to daily fantasy sports.Users have a chance to win millions ofdollars in prize money. A portion of proceeds goesdirectly to our charity, Field of Dreams, toencourage the adoption of youth sports in developingareas around the United States. Simplypick all 10 questions perfect to win!</p>
                       
                            <h3>
                                Follow Pick Perfect
                            </h3>
                            <h6>Stay up to date with PickPerfect:</h6>
                            <p>Instagram:  @pickperfectapp</p>
                            <p>Facebook: @pickperfectapp</p>
                            <p>TikTok: @pickperfect</p>
                            <p>Twitter: @pickperfectapp</p>
                            <p>Linkedin: (Pick Perfect page is set up - Amanda w/admin access)</p>

                            <h3>
                                Contact Us
                            </h3>
                            <p>Let’s chat. Contact us at help@pickperfect.co</p>
                       
                            <h2>
                                FAQs
                            </h2>
                            <h3>
                                How do I play?
                            </h3>
                            <p>Go to the app store to download Pick Perfect (link).Once downloaded, enter your information todeposit money into your Pick Perfect account. Chooseyour 10 players and enter the prize poolfor a chance to win millions!</p>
                            <h3>
                                How do I add funds?
                            </h3> 
                            <p>PayPal is the online transaction process we use toget funds into your pick perfect account</p>
                            <h3>Is there any other way to add funds other than PayPal?</h3>
                            <p>Currently we only use paypal to get funds into your account. You can sign up in a coupleminutes via paypal if you haven't already done so.</p>
                            <h3>Why is my screen taking a long time to load?</h3>
                            <p>The app is working through your request and can takea minute. If it takes any longer thankicking a 50 yard field goal, close out the app andrestart.</p>
                            <h3>Who can play?</h3>
                            <p>If you are 18+ years of age and are in an eligiblelocation, you can play!</p>
                            <h3>What locations are eligible to play?</h3>
                            <p>Please refer to our terms and conditions</p>
                            <h3>How much does an entry to win cost?</h3>
                            <p>Unlimited number of entries, $20 per entry.</p>
                            <h3>What devices work on our platform?</h3>
                            <p>Pick Perfect works on both iOS and Android.</p>
                            <h3>What locations are eligible to play?</h3>
                            <p>Please refer to our terms and conditions</p>
                            <h3>What charity does a percentage of proceeds go towards?</h3>
                            <p>Field of Dreams, a non-profit that promotes the adoptionof youth sports in communities of need</p>
                            <h3>Notes: Additional platforms to consider on the websiteafter we have more content</h3>
                            <p>Discord (will create account)</p>
                            <p>YouTube (Pick Perfect channel is set up)</p>
                       
                       </div>
                          
                              
                    </div>
                </Col>
                <Col md={2} sm={3} />
            </Row>
        </Container>
    )
}

export default PrivacyPolicy