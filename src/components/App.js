import React, { Component } from 'react';
import CountriesAndRegionDropdown from './countriesAndRegionDropdown';
import Data from '../mock/AppMock';

class App extends Component {
  render() {
    return (
      <div><center>
        <h1>{this.props.Content.heading}</h1>
            <CountriesAndRegionDropdown Content={this.props.Content}/></center>
      </div>
    );
  }
}
App.defaultProps = { Content: Data }
export default App;
