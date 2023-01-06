import axios from "axios";

const envs = {
  api_url: process.env.REACT_APP_CONTACTS_API,
  auth_token: process.env.REACT_APP_AUTH_TOKEN,
};

export async function getContactsApi(query, page, countryId) {
  try {
    const data = await axios.get(envs.api_url, {
      headers: { Authorization: `Bearer ${envs.auth_token}` },
      params: {
        companyId: 171,
        query,
        page,
        countryId,
      },
    });
    return data?.data;
  } catch (error) {
    console.log("ERROR", error);
  }
}
