import { SHOW_MODAL_C, CLOSE_MODAL_C } from "../types";

const initialState = {
  show: false,
  data: null,
};

function modalCReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_MODAL_C:
      return {
        ...state,
        show: action.payload.show,
        data: action.payload.data,
      };
    case CLOSE_MODAL_C:
      return {
        ...state,
        show: action.payload,
      };
    default:
      return state;
  }
}

export default modalCReducer;
