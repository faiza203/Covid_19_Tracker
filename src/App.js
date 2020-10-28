import './App.css';
import { Cards, Charts, CountryPicker } from "./components/App";
import {fetchData} from "./api/index"
function App() {
  const componentDidMount = async()=>{
    const data = await fetchData();
    console.log(data);
  }
  componentDidMount();
  return (
    <div className="container">
      <Cards />
      <Charts />
      <CountryPicker />
    </div>
  );
}

export default App;
