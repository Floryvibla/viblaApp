import AxiosRequest from "../utils/AxiosRequest";
import { getToken, tokenUserex } from "../utils/functions";

export const urlFile = "https://vibla-strapi.onrender.com"

function getBaseUrlExterno() {
  const baseUrl = "https://vibla-strapi.onrender.com/api";
  return baseUrl;
}

// const {  } = tokenUserex()

// console.log(tokenUserex());



const HttpInterno = () => {
  const baseUrl = getBaseUrlExterno();
  const axiosRequest = AxiosRequest(baseUrl);
  return  axiosRequest;
}

// console.log(HttpInterno());

export default HttpInterno