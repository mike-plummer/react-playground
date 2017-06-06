import React from 'react';

export class Toggle extends React.Component {

    render() {
        return <div onClick={() => this.props.onClick()}>{this.props.value}</div>
    }
}
