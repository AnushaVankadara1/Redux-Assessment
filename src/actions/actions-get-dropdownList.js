import axios from "axios";
import event_Types from './actionTypes/eventTypes'

const getCountries = (name) => async (dispatch) => {
    await axios
        .get('https://restcountries.eu/rest/v2/region/' + name)
        .then((res) => {
            console.log("success", res.data);
            dispatch(SET_DROPDOWN_VALUES(res.data));
        })
        .catch((error) => {
            dispatch(SET_DROPDOWN_VALUES_ERROR(error));
            console.log(error);
        });
}

const SET_DROPDOWN_VALUES = (result) => {
    return {
        type: event_Types.SET_DROPDOWN_VALUES,
        payload: result,
    };
};

const SET_DROPDOWN_VALUES_ERROR = (error) => {
    return {
        type: event_Types.SET_DROPDOWN_VALUES_ERROR,
        payload: error,
    };
};

export default getCountries;