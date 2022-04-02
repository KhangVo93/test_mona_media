import { Button } from '@mui/material'
import { Container, Row, Col, Label, Card, CardTitle, CardBody, CardText, CardHeader, CardFooter } from 'reactstrap'
const YourFlight = ({ dataFlight }) => {
    return (
        <>
            <Card style={{ borderRadius: 15, minWidth: 250 }}>
                <CardHeader><Label className='font-content'>YOUR FLIGHT</Label></CardHeader>
                <CardBody>
                    <CardText>
                        <Row>
                            <Col>
                                <a href="#" id="language-bar-invoker" className="u-icon-v1">
                                    <i className="number1" alt='langUSA'></i>
                                </a>
                                <Label className='font-content'>
                                    Ho Chi Minh - Hai Phong<br />
                                    <p style={{ fontWeight: 400, fontSize: 12 }}>{dataFlight[0].StartDate.slice(0, 10)}</p>

                                </Label>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <img alt='logo' src='https://rubee.com.vn/wp-content/uploads/2021/05/Logo-vietjet.jpg' style={{ width: 30, marginRight: 5, height: 30, borderRadius: 6, border: '1px solid rgba(0, 0, 0, 0.1)' }} />
                                <Label className='font-content'>
                                    VIETJET AIR
                                    <br />
                                    <a href='#' style={{ fontWeight: 400, fontSize: 12 }}>Detail</a>
                                </Label>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Label className='font-content'>{dataFlight[0].StartDate.slice(11, 16)}</Label>
                                <br />
                                <p className='font-card'>{dataFlight[0].StartPoint}</p>
                            </Col>
                            <Col>
                                <Label className='font-content text-center' style={{ borderBottom: '1px solid #4D46FA', minWidth: 50 }}>{dataFlight[0].Duration}m</Label>
                                <br />
                                <p className='font-card'>Direct</p>
                            </Col>
                            <Col>
                                <Label className='font-content'>{dataFlight[0].EndDate.slice(11, 16)}</Label>
                                <br />
                                <p className='font-card'>{dataFlight[0].EndPoint}</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button style={{ backgroundColor: 'rgba(77, 70, 250, 0.1);', borderRadius: 12 }} >
                                    <Label className='font-content' style={{ fontSize: 12, color: '#4D46FA' }}>
                                        Change departure flight
                                    </Label>
                                </Button>
                            </Col>
                        </Row>
                        <hr />
                        <Row>
                            <Col>
                                <a href="#" id="language-bar-invoker" className="u-icon-v1">
                                    <i className="number2" alt='langUSA'></i>
                                </a>
                                <Label className='font-content'>
                                    Hai Phong - Ho Chi Minh<br />
                                    <p style={{ fontWeight: 400, fontSize: 12 }}>2022-05-03</p>
                                </Label>
                            </Col>
                        </Row>
                    </CardText>
                </CardBody>
                <CardFooter>
                    <Row>
                        <Label className='font-content' style={{ fontWeight: 400 }}>Subtotal</Label>
                    </Row>
                    <Row>
                        <Label className='font-content' style={{ color: '#F06336' }}>1.322.000 vnđ</Label>
                    </Row>
                </CardFooter>
            </Card>
        </>
    )
}
export default YourFlight