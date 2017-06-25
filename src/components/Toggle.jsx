import React from 'react';

export class Toggle extends React.Component {

    render() {
        return <div
            onClick={() => this.props.onClick()}
            className={'toggle toggle'+(this.props.value % 4)}>
              {this.props.value}
          </div>
    }

    //======
    // LIFECYCLE EVENTS
    //======

    //Creation
    componentWillMount() {
      console.log('Toggle is going to load');
    }

    componentDidMount() {
      console.log('Toggle has loaded');
    }


    // Update
    componentWillReceiveProps(props) {
      console.log('Toggle got new props '+props);
    }

    shouldComponentUpdate(nextProps, nextState) {
      console.log('Determining whether to update toggle with props '+nextProps+' and state '+nextState);
      return true;
    }

    componentDidUpdate(prevProps, prevState) {
      console.log('Toggle was updated');
    }
}
