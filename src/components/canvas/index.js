import React from 'react';
import PropTypes from 'prop-types';
import BunchOfStems from '../bunch_of_stems';
const R = require('ramda');

export default class Canvas extends React.Component {
  static propTypes = {
    stems: PropTypes.arrayOf(PropTypes.object).isRequired
  };

  constructor(props) {
    super(props);
    const styles = this.props.stems.map((s) => s.style);
    this.state = {styles};
  }

  handleClick = () => {
    const transform = 'rotate(0deg)';
    let left = null;
    const styles = this.state.styles.map((p, i) => {
      if (i < 2) {
        left = (20 + 20 * i + 'px');
      } else {
        left = (100 + 20 * i + 'px');
      }
      return {transform, left};
    });
    this.setState({styles});
  }

  render() {
    const mergeFn = R.zipWith((stem, style) => R.mergeDeepRight(stem, {style}));
    const stems = mergeFn(this.props.stems, this.state.styles);
    return (
      <div id="canvas" onClick={this.handleClick}>
        <BunchOfStems stems={stems}/>
      </div>
    );
  }
}
