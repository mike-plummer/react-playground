import React from 'react';

export class Toggle extends React.Component {

    render() {
        return <div
            onClick={() => this.props.onClick()}
            className={'toggle toggle'+(this.props.value % 4)}>
              {this.props.value}
          </div>
    }
}
