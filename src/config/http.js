import AxiosRequest from "../utils/AxiosRequest";
import { getToken, tokenUserex } from "../utils/functions";

export const urlFile = "https://vibla-strapi.onrender.com"

function getBaseUrlExterno() {
  const baseUrl = "https://vibla-strapi.onrender.com/api";
  // const baseUrl = "https://a6ae-2804-1b3-a902-e3bf-fd15-d7c3-6c68-13d8.ngrok-free.app/api"
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