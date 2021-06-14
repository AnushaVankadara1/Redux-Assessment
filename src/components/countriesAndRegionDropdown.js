import React from "react";
import { connect } from 'react-redux';
import getCountries from '../actions/actions-get-dropdownList';
import CommonDropDown from './common/commonDropDown';
class CountriesAndRegionDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      region: [],
      countries: [],
      selectCountry: '',
    };
  }
  componentDidMount() {
    this.setCountries(this.props.Content.regions[0].name);
  }
  setCountries(name) {
    this.props.getCountries(name);
    if (this.props.result) {
      this.setState({
        countries: this.props.result,
      })
    }
  }
  render() {
    return (
        <div >
          
          <CommonDropDown handleOnChange={(name) => this.setCountries(name)} dropdownList={this.props.Content.regions} />
          <CommonDropDown dropdownList={this.props.result} />
        </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    result: state.event.result,
    error: state.event.error,
  };
};
const mapsDispatchToProps = (dispatch) => ({
  getCountries: (name) => dispatch(getCountries(name))
});
export default connect(mapStateToProps, mapsDispatchToProps)(CountriesAndRegionDropdown);