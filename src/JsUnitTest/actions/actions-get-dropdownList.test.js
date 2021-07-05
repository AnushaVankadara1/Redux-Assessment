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
    mock
      .onGet()
      .reply(200, { data: [{ name: "Algeria" }, { name: "India" }] });
    store.dispatch(getCountries("Africaaa")).then(() => {
      let expectedActions = [
        {
          type: "SET_DROPDOWN_VALUES",
          payload: data,
        },
      ];
      // expect(store.getCountries()).toEqual(expectedActions)
      console.log("actionstypes", store.getActions())
      expect(store.getActions().type).toEqual("SET_DROPDOWN_VALUES");
      
    });
  });
//   it("dispatches SET_DROPDOWN_VALUES_ERROR after a FAILED API requets", () => {
//     mock
//       .onGet("https://restcountries.eu/rest/v2/region/")
//       .reply(400, { error: { message: "error message" } });
//     store.dispatch(getCountries()).then(() => {
//       let expectedActions = [
//         {
//           type: "event_Types.SET_DROPDOWN_VALUES_ERROR",
//           payload: { error: { message: "error message" } },
//         },
//       ];
//       // expect(store.getCountries()).toEqual(expectedActions)
//       expect(store.getActions()).toEqual(expectedActions);
//     });
//   });
});
