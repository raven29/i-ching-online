import React from 'react';
import PropTypes from 'prop-types';
import BunchOfStems from '../bunch_of_stems';

export default class Canvas extends React.Component {
  static propTypes = {
    initialState: PropTypes.arrayOf(PropTypes.object).isRequired
  };

  constructor(props) {
    super(props);
    this.state = {current: this.props.initialState};
  }

  handleClick = () => {
    const current = this.state.current.map((s, i) => {
      const newStem = Object.assign({}, {
        knots: s.knots, 
        stem: {
          style: {
            backgroundImage: s.stem.style.backgroundImage, 
            top: s.stem.style.top
          }
        }
      });
      newStem.stem.style.transform = 'rotate(0deg)';
      if (i < 2) {
        newStem.stem.style.left = (20 + 20 * i + 'px');
      } else {
        newStem.stem.style.left = (100 + 20 * i + 'px');
      }
      return newStem;
    });
    this.setState({current});
  }

  render() {
    return (
      <div id="canvas" onClick={this.handleClick}>
        <BunchOfStems state={this.state.current}/>
      </div>
    );
  }
}
