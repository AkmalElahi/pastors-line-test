import {
  CLOSE_MODAL_A,
  CLOSE_MODAL_B,
  CLOSE_MODAL_C,
  SHOW_MODAL_A,
  SHOW_MODAL_B,
  SHOW_MODAL_C,
} from "../types";

export const showModalA = () => (dispatch) => {
  dispatch({
    type: SHOW_MODAL_A,
    payload: true,
  });
};

export const showModalB = () => (dispatch) => {
  dispatch({
    type: SHOW_MODAL_B,
    payload: true,
  });
};

export const showModalC = (data) => (dispatch) => {
  dispatch({
    type: SHOW_MODAL_C,
    payload: { show: true, data },
  });
};

export const closeModalA = () => (dispatch) => {
  dispatch({
    type: CLOSE_MODAL_A,
    payload: false,
  });
};

export const closeModalB = () => (dispatch) => {
  dispatch({
    type: CLOSE_MODAL_B,
    payload: false,
  });
};

export const closeModalC = () => (dispatch) => {
  dispatch({
    type: CLOSE_MODAL_C,
    payload: false,
  });
};
