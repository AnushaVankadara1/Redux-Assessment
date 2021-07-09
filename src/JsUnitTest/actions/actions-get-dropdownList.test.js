import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import getCountries from "../../actions/actions-get-dropdownList";

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const mock = new MockAdapter(axios);
const store = mockStore();

describe("getCountries actions", () => {
  it("dispatches getCountries after a successfull API requets", () => {
    let response = { data: [{ name: "Algeria"}, { name: "India"}]}
    mock
      .onGet()
      .reply(200, response);
     return store.dispatch(getCountries("Africa")).then(() => {
      let actionsDispatched = store.getActions()
      expect(actionsDispatched.length > 0).toBe(true)
      expect(actionsDispatched.length).toEqual(1)
      expect(actionsDispatched[0].type).toEqual("SET_DROPDOWN_VALUES")
    });
  });
  it("dispatches getCountries after a successfull API requets with empty data", () => {
    mock
      .onGet()
      .reply(200, null);
     return store.dispatch(getCountries("Africa")).then(() => {
      let actionsDispatched = store.getActions()
      expect(actionsDispatched.length > 0).toBe(true)
      // expect(actionsDispatched.length).toEqual(1)
      expect(actionsDispatched[1].type).toEqual("SET_DROPDOWN_VALUES")
    });
  });
  it("dispatches SET_DROPDOWN_VALUES_ERROR after a FAILED API requets", () => {
      mock
        .onGet()
        .reply(400, "error");
       return store.dispatch(getCountries()).then(() => {
        let actionsDispatched = store.getActions()
        expect(actionsDispatched.length > 0).toBe(true)
        // expect(actionsDispatched.length).toEqual(1)
        expect(actionsDispatched[0].type).toEqual("SET_DROPDOWN_VALUES")
      });
    });
});
