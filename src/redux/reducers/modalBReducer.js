import { SHOW_MODAL_B, CLOSE_MODAL_B } from "../types";

const initialState = {
  show: false,
};

function modalBReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_MODAL_B:
      return {
        ...state,
        show: action.payload,
      };
    case CLOSE_MODAL_B:
      return {
        ...state,
        show: action.payload,
      };
    default:
      return state;
  }
}

export default modalBReducer;
