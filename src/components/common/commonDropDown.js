import React, { Component } from "react";

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

export default CommonDropDown;

