import React from 'react';
import PropTypes from 'prop-types';
import BunchOfStems from '../bunch_of_stems';
const R = require('ramda');

export default class Canvas extends React.Component {
  static propTypes = {
    initialState: PropTypes.arrayOf(PropTypes.object).isRequired
  };

  constructor(props) {
    super(props);
    const positioning = this.props.initialState.map((s) => {
      return Object.assign({}, s.stem.positioning);
    });
    this.state = {positioning};
  }

  handleClick = () => {
    const transform = 'rotate(0deg)';
    let left = null;
    const positioning = this.state.positioning.map((p, i) => {
      if (i < 2) {
        left = (20 + 20 * i + 'px');
      } else {
        left = (100 + 20 * i + 'px');
      }
      return {transform, left};
    });
    this.setState({positioning});
  }

  render() {
    const mergeFn = R.zipWith((p, s) => {
      const style = R.merge(p.stem.appearance, s);
      return R.merge(p, {stem: {style}});
    });
    const state = mergeFn(this.props.initialState, this.state.positioning);
    return (
      <div id="canvas" onClick={this.handleClick}>
        <BunchOfStems state={state}/>
      </div>
    );
  }
}
