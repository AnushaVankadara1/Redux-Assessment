import { connect } from 'react-redux';
import Dropdown from '../components/Dropdown';
import { selectValue } from '../actions/Event';
import { getCountries } from '../actions/';

const mapStateToProps = (state) => ({details: state.details})
const mapDispatchToProps = (dispatch) => ({
    selectValue: (event) => dispatch(selectValue(event)),
})
const dropDownContainer = connect(mapStateToProps,mapDispatchToProps,(getCountries))(Dropdown);
export default dropDownContainer;