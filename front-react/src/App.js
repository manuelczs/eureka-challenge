import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css'

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      symbol: '',
      prevPrice: 0,
      currentPrice: 0,
      percentilValue: 0,
      open: 0,
      high: 0,
      low: 0,
      close: 0
    }
  }


  componentDidMount() {
    
    axios.get(`http://localhost:5000/local/getdata/AAPL`)
      .then(res => {
        let objectData = res.data
        console.log(res.data)
        
        let arrayData = Object.keys(objectData["Time Series (Daily)"]).map(i => objectData["Time Series (Daily)"][i])
        // Get current day values
        let today = arrayData[arrayData.length - 1]
        // Get yesterday values
        let yesterday = arrayData[arrayData.length - 2]

        console.log(today)
        console.log(yesterday)
        
      })
  }

  render() {
    return (
      <div className="jumbotron float-div">
        <div>
          <form action="http://localhost/">
            <label>
              <input type="text" name="text" />
            </label>peopleObj
          </form>
        </div>
        <ul>
          <h1>Company: Facebook</h1>
          <h2>Symbol: {this.state.symbol}</h2>
          <h2>Open: {this.state.open}</h2>
          <h2>High: {this.state.high}</h2>
          <h2>Low: {this.state.low}</h2>
          <h2>Close: {this.state.close}</h2>
        </ul>
      </div>
    )
  }

}

export default App;
