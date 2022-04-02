import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import { useEffect, useState } from "react"
import 'react-calendar/dist/Calendar.css';
import FooterComponent from "./components/footer/FooterComponent";
import ContentComponent from "./components/content/ContentComponent";
import axios from "axios";
function App() {

  const [dataFlight, setDataFlight] = useState([])
  const restApiGetData = () => {
    axios.get('https://mocki.io/v1/ff3207e0-f250-4a1d-9240-b3dbffa8386a')
      .then((data) => {
        setDataFlight(data.data.Flights)
      })
      .catch((err) => {
        console.log(err.message)
      })
  }

  useEffect(() => {
    restApiGetData()
  }, [])
  return (
    <div id="apppage">
      <ContentComponent dataFlight={dataFlight}/>
      <FooterComponent />
    </div>

  );
}

export default App;
