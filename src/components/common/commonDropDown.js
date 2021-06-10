import React, { Component } from "react";

class CommonDropDown extends Component {
    render() {
        const dropdownList = this.props.dropdownList

        return (
            <div>
                <select id={this.props.id} onChange={this.props.onChange} >
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

