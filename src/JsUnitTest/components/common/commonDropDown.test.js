import React from 'react';
import { shallow } from 'enzyme';
import CommonDropDown from '../../../components/common/commonDropDown';

describe('commonDropDown', ()=> {
    let props ={
      dropdownList:[{id: "countryDropDown"}],
        Data : 
{
   heading:"Countries App",
   regions : [
   {
    id:"africa",
    name:"Africa"
   },
  {
    id:"americas",
    name:"Americas"
  },
  {
    id:"asia",
    name:"Asia"
  },
  {
    id:"europe",
    name:"Europe"
  }]
},
// value: fn => fn,  
handleOnChange : fn => fn,
handleDropdownChange: fn => fn
}
  it('renders CommonDropDown components', () => {
    const wrapper = shallow(<CommonDropDown {...props}/>);
    expect(wrapper).toBeDefined();
  });
  
  it('should call handleDropdownChange method', () => {
      const value = {
          preventDefault: fn => fn,
          target: {
            name:"Africa"
          }
      }
      const wrapper = shallow(<CommonDropDown {...props}/>);
      wrapper.instance().handleDropdownChange(value);
      expect(wrapper.find('handleDropdownChange').exists()).toBe(false);
  })
  it('renders inputfield for handleDropdownChange', () => {
    const wrapper = shallow(<CommonDropDown {...props} />);
    const dropdownSelect = wrapper.find(`select`).simulate('change', {
        preventDefault: fn => fn,
        target: {
            name: "Asia"
        }
    });
    expect(dropdownSelect.exists()).toBe(true);
  });
});
