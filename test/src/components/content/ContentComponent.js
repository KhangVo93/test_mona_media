
import { Routes, Route } from "react-router-dom";
import HomeComponent from "./HomeComponent";
import FlightSchedule from "./FlightSchedule";
const ContentComponent = ({ dataFlight }) => {
    return (
        <>
            <div>

                <Routes>
                    <Route exact path='/' element={<HomeComponent />} />
                    <Route exact path='/flightSchedule' element={<FlightSchedule dataFlight={dataFlight}/>} />
                </Routes>
            </div>
        </>
    )
}
export default ContentComponent