
import { Routes, Route } from "react-router-dom";
import HomeComponent from "./HomeComponent";
import FlightSchedule from "./FlightSchedule";
const ContentComponent = ({ dataFlight, dataAnotherFlight, page, setPage, nopage }) => {
    return (
        <>
            <div>

                <Routes>
                    <Route exact path='/' element={<HomeComponent />} />
                    <Route exact path='/flightSchedule' element={<FlightSchedule page={page} nopage={nopage} setPage={setPage} dataFlight={dataFlight} dataAnotherFlight={dataAnotherFlight}/>} />
                </Routes>
            </div>
        </>
    )
}
export default ContentComponent