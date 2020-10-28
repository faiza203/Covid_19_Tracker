import './App.css';
import { Cards, Charts, CountryPicker } from "./components/App";
function App() {
  return (
    <div className="container">
      <Cards />
      <Charts />
      <CountryPicker />
    </div>
  );
}

export default App;
