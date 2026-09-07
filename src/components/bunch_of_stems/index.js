import React from 'react';
import PropTypes from 'prop-types';

export default class BunchOfStems extends React.Component {
  static propTypes = {
    stems: PropTypes.arrayOf(PropTypes.object).isRequired
  };

  render() {
    return (
      <React.Fragment>
        <div className="stem" style={this.props.stems[0].style}>
          <div className={`knot ${this.props.stems[0].knots[0].type}`} style={this.props.stems[0].knots[0].style}/>
          <div className={`knot ${this.props.stems[0].knots[1].type}`} style={this.props.stems[0].knots[1].style}/>
          <div className={`knot ${this.props.stems[0].knots[2].type}`} style={this.props.stems[0].knots[2].style}/>
        </div>
        <div className="stem" style={this.props.stems[1].style}>
          <div className="knot" style={{top: '50px'}}/>
          <div className="knot l-d" style={{top: '220px', borderRightColor: '#90a06f'}}/>
          <div className="knot" style={{top: '380px'}}/>
        </div>
        <div className="stem" style={this.props.stems[2].style}>
          <div className="knot r-d" style={{top: '55px', borderLeftColor: '#bb8e6f'}}/>
          <div className="knot" style={{top: '240px'}}/>
          <div className="knot l-d " style={{top: '350px', borderRightColor: '#87705c'}}/>
        </div>
        <div className="stem" style={this.props.stems[3].style}>
          <div className="knot" style={{top: '150px'}}/>
          <div className="knot" style={{top: '320px'}}/>
          <div className="knot" style={{top: '440px'}}/>
        </div>
        <div className="stem" style={this.props.stems[4].style}>
          <div className="knot l-u" style={{top: '20px', borderTopColor: '#87705c'}}/>
          <div className="knot" style={{top: '280px'}}/>
          <div className="knot r-u" style={{top: '380px', borderTopColor: '#bb8e6f'}}/>
        </div>
      </React.Fragment>
    );
  }
}
