import { SHOW_MODAL_A, CLOSE_MODAL_A } from "../types";

const initialState = {
  show: false,
};

function modalAReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_MODAL_A:
      return {
        ...state,
        show: action.payload,
      };
    case CLOSE_MODAL_A:
      return {
        ...state,
        show: action.payload,
      };
    default:
      return state;
  }
}

export default modalAReducer;
