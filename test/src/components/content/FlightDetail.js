import { Container, Row, Col, Label, Card, CardTitle, CardBody, CardText, CardHeader, CardFooter } from 'reactstrap'
import {Button} from '@mui/material'
const FlightDetail = ({ dataFlight }) => {
    return (
        <>
            <Card style={{ minWidth: 275, height: 'auto', borderRadius: 15 }}>
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
                                    <Button variant='contained' style={{ backgroundColor: 'rgba(240, 99, 54, 0.1)', borderRadius: 12 }}>
                                        <Label className='font-content' style={{ color: '#F06336' }}>Choose</Label>
                                    </Button>
                                </Row>
                            </Col>
                        </Row>
                    </CardTitle>
                    <CardText>
                        <Row>
                            <Col xs='auto'>
                                <Label className='font-content' style={{ color: '#4D46FA', textDecoration: 'underline' }}>FLIGHT DETAIL</Label>
                            </Col>
                            <Col xs='auto'>
                                <Label className='font-content'>FARE INFO</Label>
                            </Col>
                            <Col>
                                <hr />
                            </Col>
                        </Row>
                    </CardText>
                    <CardText>
                        <Row>
                            <Col xs='2' style={{ borderRight: '1px solid #4D46FA' }}>
                                <Label className='font-content'>
                                    {dataFlight[0].StartDate.slice(11, 16)}
                                    <br />
                                    <p style={{ fontWeight: 400, fontSize: 12 }}>

                                        {dataFlight[0].StartDate.slice(0, 10)}
                                    </p>
                                </Label>
                            </Col>
                            <Col xs='3'>
                                <Label className='font-content'>Ho Chi Minh City ({dataFlight[0].StartPoint})</Label>
                                <br />
                                <p style={{ fontWeight: 400, fontSize: 12 }}>
                                    TanSonNhat Intl
                                </p>
                            </Col>
                            <Col xs='6'>
                                <img alt='logo' src='https://rubee.com.vn/wp-content/uploads/2021/05/Logo-vietjet.jpg' style={{ width: 30, marginRight: 5, height: 30, borderRadius: 6, border: '1px solid rgba(0, 0, 0, 0.1)' }} />
                                <Label className='font-content'>
                                    <b>VIETJET AIR</b>
                                    <br />
                                    <p style={{ fontWeight: 400, fontSize: 12 }}>{dataFlight[0].FlightNumber} * {dataFlight[0].GroupClass}</p>
                                </Label>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs='2' style={{ borderRight: '1px solid #4D46FA' }}>
                                <Label className='font-content' style={{ fontWeight: 400 }}>{dataFlight[0].Duration}m</Label>
                            </Col>
                            <Col xs='3'></Col>
                            <Col xs='6'>
                                <Card style={{ borderRadius: 15 }} className='bg-light'>
                                    <CardBody>
                                        <CardText>
                                            <Row>
                                                <Col><Label className='font-content'>Air-craft <span style={{ color: '#4D46FA' }}>Airbus A{dataFlight[0].RelatedFlights[0].Plane}</span></Label>
                                                </Col>
                                                <Col><Label className='font-content'>In-flight <span style={{ color: '#4D46FA' }}>Meal</span></Label>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col><Label className='font-content'>Baggage <span style={{ color: '#4D46FA' }}>{dataFlight[0].Carryon}</span></Label>
                                                </Col>
                                                <Col><Label className='font-content'>Seat layout <span style={{ color: '#4D46FA' }}>3-3</span></Label>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col><Label className='font-content'>In-flight <span style={{ color: '#4D46FA' }}>Entertaiment</span></Label>
                                                </Col>
                                                <Col>    <Label className='font-content'>Seat pitch <span style={{ color: '#4D46FA' }}>29 inch (standards)</span></Label>
                                                </Col>
                                            </Row>
                                        </CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs='2' style={{ borderRight: '1px solid #4D46FA' }} >
                                <Label className='font-content'>
                                    {dataFlight[0].EndDate.slice(11, 16)}</Label>
                                <br />
                                <p style={{ fontWeight: 400, fontSize: 12 }}>
                                    {dataFlight[0].EndDate.slice(0, 10)}
                                </p>
                            </Col>
                            <Col xs='3'>
                                <Label className='font-content'>Hai Phong ({dataFlight[0].EndPoint})</Label>
                                <br />
                                <p style={{ fontWeight: 400, fontSize: 12 }}>
                                    Hai Phong
                                </p>
                            </Col>
                            <Col></Col>
                        </Row>
                    </CardText>
                </CardBody>
            </Card>
        </>
    )
}
export default FlightDetail