import React, { Component } from "react";
import Data from '../../mock/AppMock'; 

class CommonDropDown extends Component {
    handleDropdownChange(e) {
        e.preventDefault();
        this.props.handleOnChange(e.target.value)
    }
    render() {
        const dropdownList = this.props.dropdownList

        return (
            <div>
                <select id={this.props.id} onChange={(e) => this.handleDropdownChange(e)} >
                    {
                        dropdownList.map(x => {
                            return <option>{x.name}</option>
                        })

                    }
                </select>
            </div>
        )
    }
}

CommonDropDown.defaultProps = { Content: Data}
export default CommonDropDown;

