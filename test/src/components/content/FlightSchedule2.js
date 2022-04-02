import { Button } from '@mui/material'
import { Row, Col, Label, Card, CardTitle, CardBody, CardText } from 'reactstrap'

const FlightSchedule2 = () => {
    return (
        <>
            {/*Ticket 3*/}
            <Card style={{ minWidth: 275, height: 'auto', borderRadius: 15, marginTop: 20 }}>
                <CardBody>
                    <CardTitle>
                        <Row>
                            <Col xs='auto' style={{ marginTop: 10 }}>
                                <img alt='logo' src='https://haitrieu.com/wp-content/uploads/2022/01/Icono-VNA.png' style={{ width: 30, marginRight: 5, height: 30, borderRadius: 6, border: '1px solid rgba(0, 0, 0, 0.1)' }} />
                                <Label className='font-content'><b>VIETNAM AIRLINES</b></Label>
                            </Col>
                            <Col xs='auto'>
                                <Row style={{ maxWidth: 70 }}>
                                    <Label className='font-content'>21:40</Label>
                                    <Label className='font-card'>DAD</Label>
                                </Row>
                            </Col>
                            <Col xs='auto'>
                                <Row className='text-center' style={{ maxWidth: 100 }}>
                                    <Label className='font-content' style={{ borderBottom: '1px solid #4D46FA' }}>1h 30m</Label>
                                    <Label className='font-content'>Direct</Label>
                                </Row>
                            </Col>
                            <Col xs='auto'>
                                <Row style={{ maxWidth: 70 }}>
                                    <Label className='font-content'>23:10</Label>
                                    <Label className='font-card'>DAD</Label>
                                </Row>
                            </Col>
                            <Col xs='auto'>
                                <Row style={{ maxWidth: 150 }}>
                                    <Label className='font-content'><img alt='baggage' src='https://cdn-icons-png.flaticon.com/512/1516/1516999.png' style={{ maxWidth: 20, maxHeight: 20 }} /> Baggage <span style={{ color: '#4D46FA' }}>20kg</span></Label>
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
                                <Label className='font-content'>FLIGHT DETAIL</Label>
                            </Col>
                            <Col xs='auto'>
                                <Label className='font-content' style={{ color: '#4D46FA', textDecoration: 'underline' }}>FARE INFO</Label>
                            </Col>
                        </Row>
                    </CardText>
                </CardBody>
            </Card>

            {/*Ticket 4*/}
            <Card style={{ minWidth: 275, height: 'auto', borderRadius: 15, marginTop: 20 }}>
                <CardBody>
                    <CardTitle>
                        <Row>
                            <Col xs='auto' style={{ marginTop: 10 }}>
                                <img alt='logo' src='https://pbs.twimg.com/profile_images/981789250109632512/MV_jHh4c_400x400.jpg' style={{ width: 30, marginRight: 5, height: 30, borderRadius: 6, border: '1px solid rgba(0, 0, 0, 0.1)' }} />
                                <Label className='font-content'><b>BAMBOO AIRWAYS</b></Label>
                            </Col>
                            <Col xs='auto'>
                                <Row style={{ maxWidth: 70 }}>
                                    <Label className='font-content'>21:40</Label>
                                    <Label className='font-card'>DAD</Label>
                                </Row>
                            </Col>
                            <Col xs='auto'>
                                <Row className='text-center' style={{ maxWidth: 100 }}>
                                    <Label className='font-content' style={{ borderBottom: '1px solid #4D46FA' }}>1h 30m</Label>
                                    <Label className='font-content'>Direct</Label>
                                </Row>
                            </Col>
                            <Col xs='auto'>
                                <Row style={{ maxWidth: 70 }}>
                                    <Label className='font-content'>23:10</Label>
                                    <Label className='font-card'>DAD</Label>
                                </Row>
                            </Col>
                            <Col xs='auto'>
                                <Row style={{ maxWidth: 150 }}>
                                    <Label className='font-content'><img alt='baggage' src='https://cdn-icons-png.flaticon.com/512/1516/1516999.png' style={{ maxWidth: 20, maxHeight: 20 }} /> Baggage <span style={{ color: '#4D46FA' }}>20kg</span></Label>
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
                                <Label className='font-content'>FLIGHT DETAIL</Label>
                            </Col>
                            <Col xs='auto'>
                                <Label className='font-content' style={{ color: '#4D46FA', textDecoration: 'underline' }}>FARE INFO</Label>
                            </Col>
                        </Row>
                    </CardText>
                </CardBody>
            </Card>

            {/*Ticket 5*/}
            <Card style={{ minWidth: 275, height: 'auto', borderRadius: 15, marginTop: 20 }}>
                <CardBody>
                    <CardTitle>
                        <Row>
                            <Col xs='auto' style={{ marginTop: 10 }}>
                                <img alt='logo' src='https://haitrieu.com/wp-content/uploads/2022/01/Icono-VNA.png' style={{ width: 30, marginRight: 5, height: 30, borderRadius: 6, border: '1px solid rgba(0, 0, 0, 0.1)' }} />
                                <Label className='font-content'><b>VIETNAM AIRLINES</b></Label>
                            </Col>
                            <Col xs='auto'>
                                <Row style={{ maxWidth: 70 }}>
                                    <Label className='font-content'>21:40</Label>
                                    <Label className='font-card'>DAD</Label>
                                </Row>
                            </Col>
                            <Col xs='auto'>
                                <Row className='text-center' style={{ maxWidth: 100 }}>
                                    <Label className='font-content' style={{ borderBottom: '1px solid #4D46FA' }}>1h 30m</Label>
                                    <Label className='font-content'>Direct</Label>
                                </Row>
                            </Col>
                            <Col xs='auto'>
                                <Row style={{ maxWidth: 70 }}>
                                    <Label className='font-content'>23:10</Label>
                                    <Label className='font-card'>DAD</Label>
                                </Row>
                            </Col>
                            <Col xs='auto'>
                                <Row style={{ maxWidth: 150 }}>
                                    <Label className='font-content'><img alt='baggage' src='https://cdn-icons-png.flaticon.com/512/1516/1516999.png' style={{ maxWidth: 20, maxHeight: 20 }} /> Baggage <span style={{ color: '#4D46FA' }}>20kg</span></Label>
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
                                <Label className='font-content'>FLIGHT DETAIL</Label>
                            </Col>
                            <Col xs='auto'>
                                <Label className='font-content' style={{ color: '#4D46FA', textDecoration: 'underline' }}>FARE INFO</Label>
                            </Col>
                        </Row>
                    </CardText>
                </CardBody>
            </Card>

            {/*Ticket 6*/}
            <Card style={{ minWidth: 275, height: 'auto', borderRadius: 15, marginTop: 20 }}>
                <CardBody>
                    <CardTitle>
                        <Row>
                            <Col xs='auto' style={{ marginTop: 10 }}>
                                <img alt='logo' src='https://pbs.twimg.com/profile_images/981789250109632512/MV_jHh4c_400x400.jpg' style={{ width: 30, marginRight: 5, height: 30, borderRadius: 6, border: '1px solid rgba(0, 0, 0, 0.1)' }} />
                                <Label className='font-content'><b>BAMBOO AIRWAYS</b></Label>
                            </Col>
                            <Col xs='auto'>
                                <Row style={{ maxWidth: 70 }}>
                                    <Label className='font-content'>21:40</Label>
                                    <Label className='font-card'>DAD</Label>
                                </Row>
                            </Col>
                            <Col xs='auto'>
                                <Row className='text-center' style={{ maxWidth: 100 }}>
                                    <Label className='font-content' style={{ borderBottom: '1px solid #4D46FA' }}>1h 30m</Label>
                                    <Label className='font-content'>Direct</Label>
                                </Row>
                            </Col>
                            <Col xs='auto'>
                                <Row style={{ maxWidth: 70 }}>
                                    <Label className='font-content'>23:10</Label>
                                    <Label className='font-card'>DAD</Label>
                                </Row>
                            </Col>
                            <Col xs='auto'>
                                <Row style={{ maxWidth: 150 }}>
                                    <Label className='font-content'><img alt='baggage' src='https://cdn-icons-png.flaticon.com/512/1516/1516999.png' style={{ maxWidth: 20, maxHeight: 20 }} /> Baggage <span style={{ color: '#4D46FA' }}>20kg</span></Label>
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
                                <Label className='font-content'>FLIGHT DETAIL</Label>
                            </Col>
                            <Col xs='auto'>
                                <Label className='font-content' style={{ color: '#4D46FA', textDecoration: 'underline' }}>FARE INFO</Label>
                            </Col>
                        </Row>
                    </CardText>
                </CardBody>
            </Card>

            {/*Ticket 7*/}
            <Card style={{ minWidth: 275, height: 'auto', borderRadius: 15, marginTop: 20 }}>
                <CardBody>
                    <CardTitle>
                        <Row>
                            <Col xs='auto' style={{ marginTop: 10 }}>
                                <img alt='logo' src='https://haitrieu.com/wp-content/uploads/2022/01/Icono-VNA.png' style={{ width: 30, marginRight: 5, height: 30, borderRadius: 6, border: '1px solid rgba(0, 0, 0, 0.1)' }} />
                                <Label className='font-content'><b>VIETNAM AIRLINES</b></Label>
                            </Col>
                            <Col xs='auto'>
                                <Row style={{ maxWidth: 70 }}>
                                    <Label className='font-content'>21:40</Label>
                                    <Label className='font-card'>DAD</Label>
                                </Row>
                            </Col>
                            <Col xs='auto'>
                                <Row className='text-center' style={{ maxWidth: 100 }}>
                                    <Label className='font-content' style={{ borderBottom: '1px solid #4D46FA' }}>1h 30m</Label>
                                    <Label className='font-content'>Direct</Label>
                                </Row>
                            </Col>
                            <Col xs='auto'>
                                <Row style={{ maxWidth: 70 }}>
                                    <Label className='font-content'>23:10</Label>
                                    <Label className='font-card'>DAD</Label>
                                </Row>
                            </Col>
                            <Col xs='auto'>
                                <Row style={{ maxWidth: 150 }}>
                                    <Label className='font-content'><img alt='baggage' src='https://cdn-icons-png.flaticon.com/512/1516/1516999.png' style={{ maxWidth: 20, maxHeight: 20 }} /> Baggage <span style={{ color: '#4D46FA' }}>20kg</span></Label>
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
                                <Label className='font-content'>FLIGHT DETAIL</Label>
                            </Col>
                            <Col xs='auto'>
                                <Label className='font-content' style={{ color: '#4D46FA', textDecoration: 'underline' }}>FARE INFO</Label>
                            </Col>
                        </Row>
                    </CardText>
                </CardBody>
            </Card>

            {/*Ticket 8*/}
            <Card style={{ minWidth: 275, height: 'auto', borderRadius: 15, marginTop: 20 }}>
                <CardBody>
                    <CardTitle>
                        <Row>
                            <Col xs='auto' style={{ marginTop: 10 }}>
                                <img alt='logo' src='https://pbs.twimg.com/profile_images/981789250109632512/MV_jHh4c_400x400.jpg' style={{ width: 30, marginRight: 5, height: 30, borderRadius: 6, border: '1px solid rgba(0, 0, 0, 0.1)' }} />
                                <Label className='font-content'><b>BAMBOO AIRWAYS</b></Label>
                            </Col>
                            <Col xs='auto'>
                                <Row style={{ maxWidth: 70 }}>
                                    <Label className='font-content'>21:40</Label>
                                    <Label className='font-card'>DAD</Label>
                                </Row>
                            </Col>
                            <Col xs='auto'>
                                <Row className='text-center' style={{ maxWidth: 100 }}>
                                    <Label className='font-content' style={{ borderBottom: '1px solid #4D46FA' }}>1h 30m</Label>
                                    <Label className='font-content'>Direct</Label>
                                </Row>
                            </Col>
                            <Col xs='auto'>
                                <Row style={{ maxWidth: 70 }}>
                                    <Label className='font-content'>23:10</Label>
                                    <Label className='font-card'>DAD</Label>
                                </Row>
                            </Col>
                            <Col xs='auto'>
                                <Row style={{ maxWidth: 150 }}>
                                    <Label className='font-content'><img alt='baggage' src='https://cdn-icons-png.flaticon.com/512/1516/1516999.png' style={{ maxWidth: 20, maxHeight: 20 }} /> Baggage <span style={{ color: '#4D46FA' }}>20kg</span></Label>
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
                                <Label className='font-content'>FLIGHT DETAIL</Label>
                            </Col>
                            <Col xs='auto'>
                                <Label className='font-content' style={{ color: '#4D46FA', textDecoration: 'underline' }}>FARE INFO</Label>
                            </Col>
                        </Row>
                    </CardText>
                </CardBody>
            </Card>
        </>
    )
}
export default FlightSchedule2