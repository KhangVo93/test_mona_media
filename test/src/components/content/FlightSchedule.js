import { Container, Row, Col, Label} from 'reactstrap'
import FlightSchedule2 from './FlightSchedule2'
import HeaderComponent from '../header/HeaderComponent';
import FlightDetail from './FlightDetail';
import FareInfo from './FareInfo';
import YourFlight from './YourFlight';
import Filter from './Filter';
import SearchFlight from './SearchFlight';
import PaginationFlight from './PaginationFlight';
const FlightSchedule = ({ dataFlight, dataAnotherFlight, page, nopage, setPage }) => {

    return (
        <>
            {/* Header for Flight Schedule */}
            <HeaderComponent />

            {/* Content Flight Schedult */}
            <Container>
                {/* Search Flight */}
                <SearchFlight dataFlight={dataFlight} />
            </Container>

            <div className='bg-light'>
                <Container>
                    <Row className='mt-2'>
                        <Col xs='auto'>
                            {/* Filter */}
                            <Row className='mt-2'>
                                <Label className='font-content'>FILTER</Label>
                                <Filter />
                            </Row>
                            <Row>
                                <Col>
                                    {/*FLIGHT DETAIL*/}
                                    <FlightDetail dataFlight={dataFlight} />
                                    {/*FARE INFO*/}
                                    <FareInfo dataFlight={dataFlight} />
                                    {/* FLIGHT ANOTHER */}
                                    <FlightSchedule2 dataAnotherFlight={dataAnotherFlight}/>
                                </Col>
                            </Row>
                        </Col>
                        {/* YOUR FLIGHT */}
                        <Col xs='auto'>
                            <Row className='mt-2'>
                                <Col>
                                    <YourFlight dataFlight={dataFlight} />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <PaginationFlight page={page} nopage={nopage} setPage={setPage} />
                    </Row>
                </Container >
            </div>
        </>
    )
}
export default FlightSchedule