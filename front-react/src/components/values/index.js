import React, {Component} from 'react';
import './styles.css';

function Data(props) {
  if(props.usd < 0) {
    let usd = props.usd * (-1);
    let percent = props.percent * (-1);
    return (
      <div className="green-data">
        <h2>USD {usd}</h2>
        <h4>% {percent} <span className="up-low-font"> UP</span></h4>
      </div>
    )
  }

  return (
    <div className="red-data">
      <h2>USD {props.usd}</h2>
      <h4>% {props.percent} <span className="up-low-font"> LOW</span></h4>
    </div>
  )

}

class Values extends Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <div className="values-styles">
          <div className="row">
              <div className="col-sm-6">
                  <div className="box">
                    <h2>Variation</h2>
                    SYMBOL: {this.props.value}
                  </div>
                  <div className="separator"></div>
                  <div className="box">
                      
                      <h1>
                          USD {this.props.close}
                      </h1>

                      <Data usd={this.props.gain} percent={this.props.percent}/>
                  
                  </div>
              </div>
              <div className="col-sm-6">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="box-info">
                            <h3>Open {this.props.open}</h3>
                        </div>
                        <div className="box-info">
                            <h3>High {this.props.high}</h3>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="box-info">
                            <h3>Low {this.props.low}</h3>
                        </div>
                        <div className="box-info">
                            <h3>Close {this.props.close}</h3>
                        </div>
                    </div>
                </div>
              </div>
          </div>
        </div>
      )
    }
  }

export default Values;