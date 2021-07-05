import  {shallow} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import App from '../../components/App';
//Enzyme.configure({adapter: new Adapter()});
 
describe('App', ()=> {
    let props ={
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
}
    }
  it('renders  components', () => {
    const wrapper = shallow(<App {...props}/>);
    expect(wrapper.find(".app_div").exists()).toBe(true);
});
});