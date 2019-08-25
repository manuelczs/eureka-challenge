import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css'

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      value: 'None',
      prevPrice: 0,
      currentPrice: 0,
      percentilValue: 0,
      open: 0,
      high: 0,
      low: 0,
      close: 0
    }
    this.handleChange = this.handleChange.bind(this);
  }


  componentDidMount() {
    console.log('Component is now mounted!')
  }

  componentDidUpdate() {
    let symbol = this.state.value;

    if(symbol !== '') {

      axios.get(`http://localhost:5000/local/getdata/${symbol}`)
        .then(res => {
          let objectData = res.data        
          let arrayData = Object.keys(objectData["Time Series (Daily)"]).map(i => objectData["Time Series (Daily)"][i])
          // Get current day values
          let today = arrayData[arrayData.length - 1]
          // Get yesterday values
          // let yesterday = arrayData[arrayData.length - 2]
          // Get last value yesterday

          this.setState({
            open: parseFloat(today['1. open']).toFixed(2),
            high: parseFloat(today['2. high']).toFixed(2),
            low: parseFloat(today['3. low']).toFixed(2),
            close: parseFloat(today['4. close']).toFixed(2),
            value: ''
          })
          
        })
    }
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div className="jumbotron float-div">
        <form onChange={this.handleChange} className="form-style">
          <select>
            <option value="FB">Facebook</option>
            <option value="GOOGL">Google</option>
            <option value="AMZN">Amazon</option>
            <option value="MSFT">Microsoft</option>
            <option value="AAPL">Apple</option>
          </select>
        </form>
        <div>
          <h3>Symbol: {this.state.value}</h3>
          <h2>Open: USD {this.state.open}</h2>
          <h2>High: USD {this.state.high}</h2>
          <h2>Low: USD {this.state.low}</h2>
          <h2>Close: USD {this.state.close}</h2>
        </div>
      </div>
    )
  }

}

export default App;
