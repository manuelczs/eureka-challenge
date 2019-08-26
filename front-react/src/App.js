import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import Values from './components/values';


class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      value: 'none',
      percent: 0,
      open: 0,
      high: 0,
      low: 0,
      close: 0,
      gain: 0,
      flag: true
    }
    this.handleChange = this.handleChange.bind(this);
  }


  componentDidMount() {
    console.log('Component is now mounted!')
  }

  componentDidUpdate() {
    let symbol = this.state.value;
    let flag = this.state.flag;
    if(flag) {

      axios.get(`http://localhost:5000/local/getdata/${symbol}`)
        .then(res => {
          let objectData = res.data        
          let arrayData = Object.keys(objectData["Time Series (Daily)"]).map(i => objectData["Time Series (Daily)"][i])
          // Get current day values
          let today = arrayData[arrayData.length - 1]
          // Get yesterday values
          let yesterday = arrayData[arrayData.length - 2]
          // Get last value yesterday
          let closeYest = parseFloat(yesterday['4. close']).toFixed(2)
          let closeTod = parseFloat(today['4. close']).toFixed(2)
          let gain = closeYest - closeTod;
          let percent = (gain / closeYest) * 100;

          this.setState({
            open: parseFloat(today['1. open']).toFixed(2),
            high: parseFloat(today['2. high']).toFixed(2),
            low: parseFloat(today['3. low']).toFixed(2),
            close: parseFloat(today['4. close']).toFixed(2),
            gain: parseFloat(gain).toFixed(2),
            value: this.state.value,
            percent: parseFloat(percent).toFixed(2),
            flag: false
          })
          
        })
    }
  }

  handleChange(event) {
    this.setState({ 
      value: event.target.value,
      flag: true
    });
  }

  render() {
    return (
      <div className="jumbotron float-div">

        <form onChange={this.handleChange} className="form-style">
          <div className="upcoming">
            <h2>Upcoming Earnings</h2>
          </div>
          <div className="select">
            Company: 
            <select className="select-company">
              <option value="FB">Facebook</option>
              <option value="GOOGL">Google</option>
              <option value="AMZN">Amazon</option>
              <option value="MSFT">Microsoft</option>
              <option value="AAPL">Apple</option>
            </select>
          </div>
        </form>
        <div>
          <Values
            close={this.state.close}
            value={this.state.value}
            open={this.state.open}
            high={this.state.high}
            low={this.state.low}
            gain={this.state.gain}
            percent={this.state.percent} />
        </div>

      </div>
    )
  }

}

export default App;
