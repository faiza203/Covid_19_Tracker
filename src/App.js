import './App.css';
import { Cards, Charts, CountryPicker } from "./components/App";
import styles from "./components/App.module.css"
function App() {
  return (
    <div className="App">
      <Cards />
      <Charts />
      <CountryPicker />
    </div>
  );
}

export default App;
