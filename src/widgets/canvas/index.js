import React from 'react';
import PropTypes from 'prop-types';

export default class Canvas extends React.Component {
  static propTypes = {
    initialState: PropTypes.array.isRequired
  };

  render() {
    return (
      <div id="stage">
        <div className="stem" style={this.props.initialState[0].stem.style}>
          <div className={`knot ${this.props.initialState[0].knots[0].type}`} style={this.props.initialState[0].knots[0].style}/>
          <div className={`knot ${this.props.initialState[0].knots[1].type}`} style={this.props.initialState[0].knots[1].style}/>
          <div className={`knot ${this.props.initialState[0].knots[2].type}`} style={this.props.initialState[0].knots[2].style}/>
        </div>
        <div className="stem" style={this.props.initialState[1].stem.style}>
          <div className="knot" style={{top: '50px'}}/>
          <div className="knot l-d" style={{top: '220px', borderRightColor: '#90a06f'}}/>
          <div className="knot" style={{top: '380px'}}/>
        </div>
        <div className="stem" style={this.props.initialState[2].stem.style}>
          <div className="knot r-d" style={{top: '55px', borderLeftColor: '#bb8e6f'}}/>
          <div className="knot" style={{top: '240px'}}/>
          <div className="knot l-d " style={{top: '350px', borderRightColor: '#87705c'}}/>
        </div>
        <div className="stem" style={this.props.initialState[3].stem.style}>
          <div className="knot" style={{top: '150px'}}/>
          <div className="knot" style={{top: '320px'}}/>
          <div className="knot" style={{top: '440px'}}/>
        </div>
        <div className="stem" style={this.props.initialState[4].stem.style}>
          <div className="knot l-u" style={{top: '20px', borderTopColor: '#87705c'}}/>
          <div className="knot" style={{top: '280px'}}/>
          <div className="knot r-u" style={{top: '380px', borderTopColor: '#bb8e6f'}}/>
        </div>
      </div>
    );
  }
}
