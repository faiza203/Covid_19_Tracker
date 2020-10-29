import React from "react";
import './App.css';
import { Cards, Charts, CountryPicker } from "./components/App";
import {fetchData} from "./api/index"
class  App extends React.Component {
   state = {
    data : {},
  }
   async componentDidMount (){
    const fetchedData = await fetchData();  
    this.setState({data : fetchedData})
  }
  render (){
    const {data} = this.state;
    return (<div className="container">
      <Cards data={this.state.data} />
      <Charts />
      <CountryPicker />
    </div>)
  };
}

export default App;
