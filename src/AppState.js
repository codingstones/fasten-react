import { observable } from 'mobx';

class AppState {
  @observable rates = [ createRate('Mr. Green', 10), createRate('Mr. Pink', 15) ];

  constructor() {

  }

  resetRates() {
    this.rates = [createRate('Mr. Green', 0), createRate('Mr. Pink', 0)];
  }
}

function createRate(who, rate) {
  return {who: who, rate: rate};
}

export default AppState;

