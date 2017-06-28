import React from 'react';

import { Toggle } from './Toggle';
import { UserInput } from './UserInput';
import { ActionTypes } from './../reducer';

export class Dashboard extends React.Component {

  componentWillMount() {
    this.props.store.subscribe(() => {
      const { toggles, userInput } = this.props.store.getState();

      this.setState({
        toggles,
        userInput
      });
    })
  }

  render() {
    const { toggles, userInput } = this.props.store.getState();

    return <div>
      Click to increment

      <div>
        { toggles.map( (value, index) => this.addToggle(index, value)) }
      </div>

      The Dashboard knows that the current state of the toggles is { toggles }

      <br />

      <UserInput store = { this.props.store } />

      The user typed in { userInput }
    </div>
  }

  addToggle(index, value) {
    return <Toggle store = { this.props.store }
                   key = { index }
                   index = { index }
                   value = { value }
    />
  }
}
