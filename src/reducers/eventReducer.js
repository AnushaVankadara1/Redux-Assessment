import ACTION_TYPES from '../actions/actionTypes'
  const initialState = {
  loading: false,
  result: [],                                                       
  error: null,
};
const eventReducer = (state = initialState, {payload, type}) => {        //{payload, type}--action
  switch (type) {                                       //action.type
    case ACTION_TYPES.FETCH_STARTED: 
      return {
        ...state,
      };
   case ACTION_TYPES.FETCH_SUCCESS:
      return {
        ...state,
          result: payload,  //result: action.payload
        error:null,
      };
    case ACTION_TYPES.FETCH_FAIL:
      return {
        ...state,
        //error: action.payload,
        error: payload.error,
        loading:false,
      }; 

    default:
      return state;
  }
};

export default eventReducer;





























// const INITIAL_STATE = {

// }
// const eventReducer = (state = INITIAL_STATE , action) => {
//     console.log(action)
//     switch(action.type){
//         case 'SELECTED_VALUE':
//         return{
//             ...state,
//             selectValue: action.region,
//             changeCountries: action.changeCountries
//         }
//         default: return state;
    
//     }
// }
// export default eventReducer;