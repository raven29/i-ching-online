import React from 'react';

export default class Canvas extends React.Component {
  render() {
    return (
      <div id="stage">
        <div className="stem" style={{transform: 'rotate(0deg)', left: '100px', top: '20px', backgroundImage: 'linear-gradient(to bottom, #a5b47f, #69844f)'}}>
          <div className="knot l-u" style={{top: '50px', borderTopColor: '#90a06f'}}/>
          <div className="knot l-u" style={{top: '220px', borderTopColor: '#90a06f'}}/>
          <div className="knot l-u" style={{top: '380px', borderTopColor: '#90a06f'}}/>
        </div>
        <div className="stem" style={{transform: 'rotate(15deg)', left: '100px', top: '15px', backgroundImage: 'linear-gradient(to bottom, #a5b47f, #69844f)'}}>
          <div className="knot" style={{top: '50px'}}/>
          <div className="knot l-d" style={{top: '220px', borderRightColor: '#90a06f'}}/>
          <div className="knot" style={{top: '380px'}}/>
        </div>
        <div className="stem" style={{transform: 'rotate(2deg)', left: '120px', top: '10px', backgroundImage: 'linear-gradient(to bottom, #bb8e6f, #55474a)'}}>
          <div className="knot r-d" style={{top: '55px', borderLeftColor: '#bb8e6f'}}/>
          <div className="knot" style={{top: '240px'}}/>
          <div className="knot l-d " style={{top: '350px', borderRightColor: '#87705c'}}/>
        </div>
        <div className="stem" style={{transform: 'rotate(-3deg)', left: '130px', top: '5px', backgroundImage: 'linear-gradient(to bottom, #a5b47f, #69844f)'}}>
          <div className="knot" style={{top: '150px'}}/>
          <div className="knot" style={{top: '320px'}}/>
          <div className="knot" style={{top: '440px'}}/>
        </div>
        <div className="stem" style={{transform: 'rotate(-2deg)', left: '145px', top: '10px', backgroundImage: 'linear-gradient(to bottom, #bb8e6f, #6c4b45)'}}>
          <div className="knot l-u" style={{top: '20px', borderTopColor: '#87705c'}}/>
          <div className="knot" style={{top: '280px'}}/>
          <div className="knot r-u" style={{top: '380px', borderTopColor: '#bb8e6f'}}/>
        </div>
      </div>
    );
  }
}