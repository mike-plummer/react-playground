import React from 'react';
import { ActionTypes } from './../reducer';

export class UserInput extends React.Component {

  render() {
    return <div>
      <input
        placeholder="Type something!"
        onChange = { this._inputChanged } />

      { this.moreThanTwoCharacters && (<p>You typed more than two characters!</p>)}
    </div>
  }

  _inputChanged = (event) => {
    this.props.store.dispatch({
      type: ActionTypes.UPDATE_INPUT,
      payload: event.target.value
    });

    this.moreThanTwoCharacters = event.target.value && event.target.value.length > 2;
  }
}
