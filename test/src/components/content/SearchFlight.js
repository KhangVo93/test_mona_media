import { Button } from '@mui/material'
import { Row, Col, Label } from 'reactstrap'
import SearchIcon from '@mui/icons-material/Search';

const SearchFlight = ({ dataFlight }) => {
    return (
        <>
            <Row className='mt-2'>
                <Col>
                    <Row>
                        <Col xs='auto'>
                            <Row>
                                <Col xs='auto'>
                                    <Label className='font-flight-schedule'>Ho Chi Minh ({dataFlight[0].StartPoint})</Label>
                                    <p style={{ fontSize: 12 }}>{dataFlight[0].StartDate.slice(0, 10)}</p>
                                </Col>
                                <Col xs='auto'><img alt='vector' src='https://cdn-icons-png.flaticon.com/512/335/335522.png' style={{ width: 20, height: 20 }} /></Col>
                                <Col xs='auto'>
                                    <Label className='font-flight-schedule'>Hai Phong ({dataFlight[0].EndPoint})</Label>
                                    <p style={{ fontSize: 12 }}>{dataFlight[0].EndDate.slice(0, 10)}</p>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs='auto' className='text-center'>
                            <Row>
                                <Col xs='auto'>
                                    <Label className='font-content'>
                                        Round-trip
                                    </Label>
                                </Col>
                                <Col xs='auto' >
                                    <Label className='font-content'>
                                        <span style={{ color: '#4D46FA' }}>02</span>Adult, <span style={{ color: '#4D46FA' }}>01</span> Children
                                    </Label>
                                </Col>
                                <Col xs='auto'>
                                    <Label className='font-content'>Business Class
                                    </Label>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs='auto'>
                            <Button variant='contained' className='font-content' style={{ marginLeft: 130, borderRadius: 10, backgroundColor: '#F06336' }}>
                                Change Flights
                                <SearchIcon />
                            </Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}
export default SearchFlight