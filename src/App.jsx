import React, { Component } from 'react';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

@observer
class App extends Component {
  render() {
    return (
      <div>
        <DevTools />
        <br/>
         {this.props.appState.rates.map((rate, index) =>
            <div key={rate.who}> RATE {rate.who}
              <input type="text"
                 value={rate.rate}
                 onChange={this.onRateChange.bind(this, index)}>
              </input>
              <br/>
            </div>
         )}
        <button onClick={this.onReset}>
          RESET RATES
        </button>
      </div>
    );
  }

  onReset = () => {
    this.props.appState.resetRates();
  }

  onRateChange = (index, event) => {
    this.props.appState.rates[index].rate = event.target.value;
  }

};

export default App;
