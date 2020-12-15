import axios from 'axios';
import { BASE_URL } from '../configs/configs';

const getContactsService = async (opts) => {
  const { data } = await axios.get(BASE_URL,
    opts)
  return data
}


export default {
  getContactsService
}