import { GET_CONTACTS, UPDATE_PAGE } from "../types";

const initialState = {
  contacts: [],
  contacts_ids: [],
  loading: true,
  page: 1,
};

function getContacts(state = initialState, action) {
  switch (action.type) {
    case GET_CONTACTS:
      const contactsArray = Object.entries(action.payload.contacts).map(
        ([id, obj]) => ({
          id,
          ...obj,
        })
      );
      return {
        ...state,
        contacts: [...contactsArray, ...state.contacts],
        contacts_ids: action.payload.contacts_ids,
        loading: false,
      };

    case UPDATE_PAGE:
      return {
        ...state,
        page: action.payload,
        loading: true,
      };

    default:
      return state;
  }
}

export default getContacts;
