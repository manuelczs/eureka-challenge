import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/local/getdata/FB`)
      .then(res => {
        console.log(res.data["Meta Data"]["2. Symbol"])
      })
  }

  render() {
    return (
      <div>
        <ul>
          { this.state.items.map(item => <li>{item}</li>)}
        </ul>
      </div>
    )
  }

}

export default App;
