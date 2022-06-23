import { useSelector } from "react-redux";
import { Store } from "./store";
import types from "./types";


const myData = Store.getState().calcReducer;

export const handleNumberPress = (buttonValue) => {
    // const firstNumber = useSelector((state) => state.calcReducer.firstNumber)
    var firstnum = Store.getState().calcReducer.firstNumber
    return dispatch => {
        if (firstnum.length < 10) {
            dispatch({
                type: types.FIRSTNUM,
                payload: firstnum + buttonValue,
            });
        }
    }
}

export const handleOperationPressed = (buttonValue) => {
    return dispatch => {
        dispatch({
            type: types.OPERATION,
            payload: buttonValue
        })
    }
}

export const getResult = (result) => {
    return dispatch => {
        console.log('result', result)
        dispatch({
            type: types.RESULT,
            payload: result
        })

    }
}

export const clear = () => {
    return dispatch => {
        console.log("cleared")
        dispatch({
            type: types.CLEAR
        })
    }
    // this.setState({ operation: '', secondNumber: '', firstNumber: '', result: null })
}