import React, { Component } from 'react';
import Header from './Header';
import Bands from './Bands';

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: 'Rocksmith'
    };
  }
  render() {
    return (
      <div >
        <Header title={this.state.title} />
        <div className="mt-5">
          <Bands />
        </div>
      </div>
    );
  }
}

export default App;
