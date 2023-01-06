import { combineReducers } from "redux";
import contactsReducer from "./contactsReducer";
import modalAReducer from "./modalAReducer";
import modalBReducer from "./modalBReducer";
import modalCReducer from "./modalCReducer";

export default combineReducers({
  contacts: contactsReducer,
  modalA: modalAReducer,
  modalB: modalBReducer,
  modalC: modalCReducer,
});
