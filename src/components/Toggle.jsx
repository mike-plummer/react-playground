import React from 'react';
import { ActionTypes } from './../reducer';

export class Toggle extends React.Component {

  render() {
      return <div
          onClick = { this._clickHandler }
          className = { 'toggle toggle'+(this.props.value % 4) }>
            {this.props.value}
        </div>
  }

  _clickHandler = () => {
    this.props.store.dispatch({
      type: ActionTypes.INCREMENT_TOGGLE,
      payload: this.props.index
    })
  }
}
