import React, {Component} from 'react';
import './styles.css';

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
                      <h2>
                          USD {this.props.gain}
                      </h2>
                      <h4>
                          % {this.props.percent}
                      </h4>
                  </div>
              </div>
              <div className="col-sm-6">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="box-info">
                            <h3>Open: {this.props.open}</h3>
                        </div>
                        <div className="box-info">
                            <h3>High: {this.props.high}</h3>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="box-info">
                            <h3>Low: {this.props.low}</h3>
                        </div>
                        <div className="box-info">
                            <h3>Close: {this.props.close}</h3>
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