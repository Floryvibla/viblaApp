import AxiosRequest from "../utils/AxiosRequest";
import { getToken, tokenUserex } from "../utils/functions";

export const urlFile = "https://f7d1-2804-1b3-a901-e9e7-244c-a1e3-aafa-19f1.ngrok-free.app"

function getBaseUrlExterno() {
  const baseUrl = "https://f7d1-2804-1b3-a901-e9e7-244c-a1e3-aafa-19f1.ngrok-free.app/api";
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