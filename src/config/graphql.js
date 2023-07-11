import AxiosRequest from "../utils/AxiosRequest";
import { getToken, tokenUserex } from "../utils/functions";

export const urlFile = "http://192.168.15.42:1337"

function getBaseUrlExterno() {
  const baseUrl = "http://192.168.15.42:1337";
  return baseUrl;
}

// const {  } = tokenUserex()

// console.log(tokenUserex());



const Graphql = () => {
  const baseUrl = getBaseUrlExterno();
  const axiosRequest = AxiosRequest(baseUrl);
  return  axiosRequest;
}

// console.log(Graphql());

export default Graphql