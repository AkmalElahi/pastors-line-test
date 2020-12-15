import services from '../../api';
import ContactsApi from '../../api/ContactsApi';
import { getContactsService } from '../../api/ContactsApi'
import ActionTypes from '../constants/actionTypes';
const { api } = services

const token = process.env.REACT_APP_TOKEN
export function getContacts(params) {
  console.log("PARAMS", params)
  return async dispatch => {
    dispatch(request());
    try {
      const data = await api.getContactsService({
        headers: {
          'Authorization': `Bearer ${token}`
        },
        params
      },)
      dispatch(success(data))
    } catch (error) {
      dispatch(failure(error))
    }
  };

  function request() { return { type: ActionTypes.GET_CONTACTS.REQUEST } }
  function success(data) { return { type: ActionTypes.GET_CONTACTS.SUCCESS, payload: data } }
  function failure(error) { return { type: ActionTypes.GET_CONTACTS.FAILURE, payload: error } }
}