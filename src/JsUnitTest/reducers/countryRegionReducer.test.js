import event_Types from "../../actions/actionTypes/eventTypes";
import countryRegionReducer from "../../reducers/countryRegionReducer";

const initialState = {
  result: '',
  error: false,
};
describe("testing reducer", () => {
  it("handles success", () => {
    expect(
      countryRegionReducer(initialState, {
        type: event_Types.SET_DROPDOWN_VALUES,
        payload: "1",
      })
    ).toEqual({
      ...initialState,
      result: "1",
    });
});
    it("handle error", () => {
      expect(
        countryRegionReducer(initialState, {
          type: event_Types.SET_DROPDOWN_VALUES_ERROR,
          error: { result: false },
        })
      ).toEqual({
        ...initialState,
        error: { result: false },
      });
    });
  });
