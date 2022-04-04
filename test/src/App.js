import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import { useEffect, useState } from "react"
import 'react-calendar/dist/Calendar.css';
import FooterComponent from "./components/footer/FooterComponent";
import ContentComponent from "./components/content/ContentComponent";
import axios from "axios";
function App() {

  const [dataFlight, setDataFlight] = useState([])
  const [dataAnotherFlight, setDataAnotherFlight] = useState([])

  // pagination
  
  const [page, setPage] = useState(1)
  const [nopage, setNoPage] = useState(0)

  const restApiGetData = () => {
    axios.get('https://mocki.io/v1/ff3207e0-f250-4a1d-9240-b3dbffa8386a')
      .then((data) => {
        setDataFlight(data.data.Flights)
        setNoPage(Math.ceil(data.data.Flights.length / 5))
        setDataAnotherFlight(data.data.Flights.slice((page - 1) * 5, page * 5))
      })
      .catch((err) => {
        console.log(err.message)
      })
  }

  useEffect(() => {
    restApiGetData()
  }, [page])
  return (
    <div id="apppage">
      <ContentComponent dataFlight={dataFlight} dataAnotherFlight={dataAnotherFlight} page={page} nopage={nopage} setPage={setPage}/>
      <FooterComponent />
    </div>

  );
}

export default App;
