import React, { Component } from 'react';
import Demo from '../mock/AppMock';
import { connect } from 'react-redux';
import { getCountries } from '../actions/action-get-dropDownList';

class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdown1: [],
            dropdown2: [],
            selected: '',
        };
    }
    
    componentDidMount(){
        this.setCountries(this.props.countries[0]);
        this.setState({
            dropdown1: this.props.countries,
            dropdown2: this.props.result
        });
    }

    componentWillReceiveProps(nextProps) {
        if(this.state.result !== nextProps.result){
            this.setState({
                dropdown2: nextProps.result,
                selected: nextProps.name
            })
        }
    }

    setCountries(name){
        this.props.getCountries(name);
        if(this.props.result){
            this.setState({
                dropdown2: this.props.result,
            })
        }
    }

    handleOnChange(e){
        e.preventDefault();
        this.setCountries(e.target.value);
    }

    render() {
        return (
            <div><center>
             <select value={this.state.selected}
             onChange={this.handleOnChange.bind(this)}>
                 {
                     this.state.dropdown1.map(x => {
                         return <option key={x}>{x}</option>
                     })
                 }
             </select>
             {/* <div>  */}
                 <select>
                     {
                     this.state.dropdown2.map(x => {
                         return <option>{x.name}</option>
                     })}
                 </select>
             {/* </div> */}</center>
            </div>
            
        )
    }
}

Dropdown.defaultProps= Demo

const mapStateToProps = (state) => {
    return {
        result: state.event.result,
        error: state.event.error,
    };
};

const mapDispatchProps = (dispatch) => ({
   getCountries: (name) => dispatch(getCountries(name))
});
   
export default connect(mapStateToProps, mapDispatchProps)(Dropdown);
