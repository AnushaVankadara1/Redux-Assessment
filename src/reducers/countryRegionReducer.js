import event_Types from '../actions/actionTypes/eventTypes';
const INITIAL_STATE = {
  result: [],
  // error : false
}
const countryRegionReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case event_Types.SET_DROPDOWN_VALUES:
      return {
        ...state,
        result: payload,
      };
    case event_Types.SET_DROPDOWN_VALUES_ERROR:
      return {
        ...state,
       error : {result: false}
       
      };
    default:
      return state;
  }
};

export default countryRegionReducer;

