import { CONTACTS_ERROR, GET_CONTACTS, UPDATE_PAGE } from "../types";
import { getContactsApi } from "../../api";

export const getContacts = (query, page, countryId) => async (dispatch) => {
  try {
    const data = await getContactsApi(query, page, countryId);
    dispatch({
      type: GET_CONTACTS,
      payload: { contacts: data.contacts, contacts_ids: data.contacts_ids },
    });
  } catch (e) {
    dispatch({
      type: CONTACTS_ERROR,
      payload: console.log(e),
    });
  }
};

export const updatePage = (page) => (dispatch) => {
  dispatch({
    type: UPDATE_PAGE,
    payload:page,
  });
};
