import axios from "axios";
import ACTION_TYPES from './actionTypes';
export const getCountries = (name) => async (dispatch) => {
    dispatch(getData(), getError());
    await axios
     .get("https://restcountries.eu/rest/v2/region/"+ name)
     .then((res)=> {
         console.log(" successresponse",res.data);
        dispatch(getData(res.data));
      })
      .catch((error) => {
        dispatch(getError(error));//error.message
        console.log(error);
      });
   };
   const getData = (result) => {  
       return{       
    type: ACTION_TYPES.FETCH_SUCCESS,                  
    payload: result,
     };
} ;
const getError = (error) => {   //data
    return{                            
    type: ACTION_TYPES.FETCH_FAIL,
    payload: error,
};  
  };
  





// import axios from "axios";
// import { SET_DROPDOWN_VALUES_ERRORS, SET_DROPDOWN_VALUES } from '../actiontypes/eventTypes';
//  export const getCountries = () => async dispatch => {
//      try{
//          const res = await
//          axios.get('https://restcountries.eu/rest/v2/region/{region}')
//          dispatch({
//              type: SET_DROPDOWN_VALUES,
//              payload: res.name,
//          })
//      }
//      catch(e){
//          dispatch({
//              type: SET_DROPDOWN_VALUES_ERRORS,
//              payload: console.log(e),
//          })
//      }
//  }