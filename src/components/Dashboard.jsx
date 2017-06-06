import React from 'react';

import { Toggle } from './Toggle';

export class Dashboard extends React.Component {

  constructor() {
    super();
    this.state = {
      values: [1, 2, 3, 4]
    };
  }

  render() {
    return <div>
      { this.addToggle(0) }
      { this.addToggle(1) }
      { this.addToggle(2) }
      { this.addToggle(3) }
    </div>
  }

  addToggle(index) {
    return <Toggle value={this.state.values[index]}
                   onClick={
                     () => {
                       this.state.values[index]++;
                       this.setState(this.state);
                     }
                   }
    />
  }
}
