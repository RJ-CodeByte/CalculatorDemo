import types from "./types";

const initialState = {
    firstNumber: '',
    secondNumber: '',
    operation: '',
    result: null,
}

function calcReducer(state = initialState, action) {
    switch (action.type) {
        case types.FIRSTNUM:
            return { ...state, firstNumber: action.payload };
        case types.SECONDNUM:
            return { ...state, secondNumber: action.payload };
        case types.OPERATION:
            return { ...state, operation: action.payload, secondNumber: state.firstNumber, firstNumber: '' };
        case types.RESULT:
            return { ...state, result: action.payload };
        case types.CLEAR:
            return { ...initialState };
        default:
            return state;
    }
}

export default calcReducer