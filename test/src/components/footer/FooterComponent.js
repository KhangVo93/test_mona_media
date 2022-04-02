import { Container, Col, Label, Row } from 'reactstrap'
import instagram from '../../assets/instagram.png'
import facebook from '../../assets/facebook.png'
const FooterComponent = () => {
    return (
        <>
            <div className='bg-light'>
                <Container>
                    <Row className='p-2' style={{ height: 100 }} >
                        <Col xs='3' style={{ marginTop: 50 }}>
                            <Label className='font-content'><img alt='img' src='https://cdn-icons-png.flaticon.com/512/724/724664.png' style={{ width: 25, height: 25 }} /> Call us: +84 908 02 02 58</Label>
                        </Col>
                        <Col xs='3'  style={{ marginTop: 50 }}>
                            <Label className='font-content'><img alt='img' src='https://cdn-icons-png.flaticon.com/512/552/552486.png' style={{ width: 25, height: 25 }} /> Email: chucinog @gmail.com</Label>
                        </Col>
                        <Col xs='6' style={{ marginTop: 50 }}>
                            <Row style={{ textAlign: 'right' }}>
                                <Col xs='6'><Label  className='font-content'>Follow us</Label></Col>
                                <Col xs='2'><hr style={{ color: 'black' }} /></Col>
                                <Col xs='1'>
                                    <img alt='img' src={facebook} style={{ width: 25, height: 25 }}></img>
                                </Col>
                                <Col xs='1'>
                                    <img alt='img' src={instagram} style={{ width: 25, height: 25 }}></img>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container >
            </div>
        </>
    )
}
export default FooterComponent