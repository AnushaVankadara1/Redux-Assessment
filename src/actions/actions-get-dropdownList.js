import axios from "axios";
import event_Types from './actionTypes/eventTypes'

const getCountries = (name) => async (dispatch) => {
    await axios
        .get('https://restcountries.eu/rest/v2/region/Africa' )
        .then((res) => {
            console.log("success", res);
            // dispatch(SET_DROPDOWN_VALUES(res.data));
            dispatch(getData(res.data));
        })
        .catch(() => {
            // dispatch(SET_DROPDOWN_VALUES_ERROR(error));
            dispatch(getError());
            console.log("error");
        });
}

// const SET_DROPDOWN_VALUES = (result) => {
    const getData = (result) => {
    return {
        type: event_Types.SET_DROPDOWN_VALUES,
        payload: result,
    };
};

// const SET_DROPDOWN_VALUES_ERROR = (error) => {
    const getError = () => {
    return {
        type: event_Types.SET_DROPDOWN_VALUES_ERROR,
        payload: "error",
    };
};

export default getCountries;