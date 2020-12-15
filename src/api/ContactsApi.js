import axios from 'axios';
import { BASE_URL } from '../configs/configs';
import BaseApi from './BaseApi';

// class ContactsApi extends BaseApi {
//   getContacts(params) {
//     return axios.get(
//       BASE_URL,
//       {
//         headers: {
//           'Authorization': this.getToken()
//         },
//         params
//       },
//     );
//   }
// }

// export default new ContactsApi();

const getContactsService = async (opts) => {
  const { data } = await axios.get(BASE_URL,
    opts)
  return data
}


export default {
  getContactsService
}