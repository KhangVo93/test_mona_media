import { Container, Row, Col, Label, Card, CardTitle, CardBody, CardText, CardHeader, CardFooter } from 'reactstrap'
import { Button } from '@mui/material'
const FareInfo = ({ dataFlight }) => {
    return (
        <>
            <Card style={{ minWidth: 275, height: 'auto', borderRadius: 15, marginTop: 20 }}>
                <CardBody>
                    <CardTitle>
                        <Row>
                            <Col xs='auto' style={{ marginTop: 10 }}>
                                <img alt='logo' src='https://rubee.com.vn/wp-content/uploads/2021/05/Logo-vietjet.jpg' style={{ width: 30, marginRight: 5, height: 30, borderRadius: 6, border: '1px solid rgba(0, 0, 0, 0.1)' }} />
                                <Label className='font-content'><b>VIETJET AIR</b></Label>
                            </Col>
                            <Col xs='auto'>
                                <Row style={{ maxWidth: 70 }}>
                                    <Label className='font-content'>{dataFlight[0].StartDate.slice(11, 16)}</Label>
                                    <Label className='font-card'>{dataFlight[0].StartPoint}</Label>
                                </Row>
                            </Col>
                            <Col xs='auto'>
                                <Row className='text-center' style={{ maxWidth: 100 }}>
                                    <Label className='font-content' style={{ borderBottom: '1px solid #4D46FA' }}>{dataFlight[0].Duration}m</Label>
                                    <Label className='font-card'>Direct</Label>
                                </Row>
                            </Col>
                            <Col xs='auto'>
                                <Row style={{ maxWidth: 70 }}>
                                    <Label className='font-content'>{dataFlight[0].EndDate.slice(11, 16)}</Label>
                                    <Label className='font-card'>{dataFlight[0].EndPoint}</Label>
                                </Row>
                            </Col>
                            <Col xs='auto'>
                                <Row style={{ maxWidth: 150 }}>
                                    <Label className='font-content'><img alt='baggage' src='https://cdn-icons-png.flaticon.com/512/3154/3154348.png' style={{ maxWidth: 20, maxHeight: 20 }} /> Freebag <span style={{ color: '#4D46FA' }}>{dataFlight[0].Freebag}</span></Label>
                                    <Label className='font-content'><img alt='baggage' src='https://cdn-icons-png.flaticon.com/512/1516/1516999.png' style={{ maxWidth: 20, maxHeight: 20 }} /> Baggage <span style={{ color: '#4D46FA' }}>{dataFlight[0].Carryon}</span></Label>
                                    <Label className='font-content'><img alt='spoon' src='https://cdn-icons-png.flaticon.com/128/7033/7033712.png' style={{ maxWidth: 20, maxHeight: 20 }} /> In-flight <span style={{ color: '#4D46FA' }}>Meal</span></Label>
                                </Row>
                            </Col>
                            <Col xs='auto'>
                                <Row style={{ maxWidth: 130 }}>
                                    <Label className='font-content' style={{ fontWeight: 400 }}><del>1.326.000 vnđ</del></Label>
                                    <Label className='font-content' style={{ color: '#F06336' }}>1.322.000 vnđ</Label>
                                </Row>
                            </Col>
                            <Col xs='auto'>
                                <Row style={{ marginTop: 10 }}>
                                    <Button variant='contained' style={{ backgroundColor: '#F06336', borderRadius: 12 }}>
                                        <Label className='font-content' style={{ color: '#FFFFFF' }}>Choose</Label>
                                    </Button>
                                </Row>
                            </Col>
                        </Row>
                    </CardTitle>
                    <CardText>
                        <Row>
                            <Col xs='auto'>
                                <Label className='font-content'>FLIGHT DETAIL</Label>
                            </Col>
                            <Col xs='auto'>
                                <Label className='font-content' style={{ color: '#4D46FA', textDecoration: 'underline' }}>FARE INFO</Label>
                            </Col>
                            <Col>
                                <hr />
                            </Col>
                        </Row>
                    </CardText>
                    <CardText>
                        <Row>
                            <Col xs='5'>
                                <Row>
                                    <Label className='font-content'><b>CONDITIONS</b></Label>
                                </Row>
                                <Row>
                                    <Col>
                                        <img alt='logo' src='https://rubee.com.vn/wp-content/uploads/2021/05/Logo-vietjet.jpg' style={{ width: 30, marginRight: 5, height: 30, borderRadius: 6, border: '1px solid rgba(0, 0, 0, 0.1)' }} />
                                        <Label className='font-content'>
                                            <b>VIETJET AIR</b>
                                            <br />
                                            <p style={{ fontWeight: 400, fontSize: 12 }}>{dataFlight[0].FlightNumber} * {dataFlight[0].GroupClass}</p>
                                        </Label>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs='auto'>
                                        <Label className='font-content' style={{ fontWeight: 400 }}>Ho Chi Minh City</Label>
                                        <br />
                                        <p className='font-card' style={{ color: '#4D46FA' }}>Economy</p>
                                    </Col>
                                    <Col xs='3'>
                                        <hr />
                                    </Col>
                                    <Col xs='auto'>
                                        <Label className='font-content' style={{ fontWeight: 400 }}>Hai Phong</Label>
                                    </Col>
                                </Row>
                                <Row>
                                    <Label className='font-content' style={{ fontWeight: 400, fontSize: 12 }}>Non - Refundable</Label>
                                </Row>
                            </Col>
                            <Col>
                                <Row>
                                    <Label className='font-content'><b>PRICE DETAILS</b></Label>
                                </Row>
                                <Row>
                                    <Col><Label className='font-content' style={{ fontWeight: 400 }}>Adult Basic Fare (x1)</Label></Col>
                                    <Col><Label className='font-content'><b>1,326,000 vnd</b></Label></Col>
                                </Row>
                                <Row>
                                    <Col><Label className='font-content' style={{ fontWeight: 400 }}>Tax</Label></Col>
                                    <Col><Label className='font-content'>included</Label></Col>
                                </Row>
                                <Row>
                                    <Col><Label className='font-content' style={{ fontWeight: 400 }}>Regular Total Price</Label></Col>
                                    <Col><Label className='font-content'>1,326,000 vnd</Label></Col>
                                </Row>
                                <Row>
                                    <Col><Label className='font-content' style={{ fontWeight: 400, color: 'orange' }}>Save</Label></Col>
                                    <Col><Label className='font-content'>- 4,000 vnd</Label></Col>
                                </Row>
                                <hr />
                                <Row>
                                    <Col><Label className='font-content' style={{ fontWeight: 400 }}>You pay</Label></Col>
                                    <Col><Label className='font-content' style={{ color: 'orange' }}>1,322,000 vnd</Label></Col>
                                </Row>
                            </Col>
                        </Row>
                    </CardText>
                </CardBody>
            </Card>
        </>
    )
}
export default FareInfo