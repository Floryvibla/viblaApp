import axios from "axios";

const AxiosRequest = (baseUrl, headers = null) => {
  // console.log(headers);
  if (headers) {
    return axios.create({
      baseURL: baseUrl,
      headers: headers
    });
  } else {
      return axios.create({
        baseURL: baseUrl,
        headers: headers
    });
  }
}

export default AxiosRequest;