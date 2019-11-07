import React, { Component } from 'react';
import PopUp from './PopUp';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      showPopUp: false 
      };
  }
  changePopUp() {
    this.setState({
      showPopUp: !this.state.showPopUp
    });
  }
  render() {
    return (
      <div >
        <button onClick={this.changePopUp.bind(this)} className='btn-info' >Click</button>
        {this.state.showPopUp ? (
          <PopUp text='PriceType:1' closePopUp={this.changePopUp.bind(this)}
          />
        ) : null}
      </div>
    );
  }
}

export default Main;
