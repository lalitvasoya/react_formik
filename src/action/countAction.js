import React from "react";

const INCREMENT_COUNT = "INCREMENT_COUNT"
const DECREMENT_COUNT = "DECREMENT_COUNT"

const updateCountValue= (value) => (dispatch, getState) => {
    const count = getState().count;
    return dispatch({
        type: INCREMENT_COUNT,
        payload: value
    })
}

export {updateCountValue, INCREMENT_COUNT, DECREMENT_COUNT}
