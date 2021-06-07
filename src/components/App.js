import React, { Component } from 'react';
import Dropdown from './Dropdown';
import Demo from '../mock/AppMock';

class App extends Component {
  render() {
    return (
      <div><center>
        <h1>{this.props.Content.heading}</h1><br/></center>
        <Dropdown/>
      </div>
    );
  }
}

App.defaultProps= {Content:Demo}
export default App;