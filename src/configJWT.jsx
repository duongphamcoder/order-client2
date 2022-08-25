import axios from "axios";
import jwt_decode from "jwt-decode";

const axiosAuthorization = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

const axiosClient = axios.create({
  headers: { "Content-Type": "application/json" },
});

/*
 * thực hiện xử lý những việc cần thiết trước khi gửi một request lên server
 * đặc biệt là xác thực token, để kiểm tra người dùng còn quyền truy cập hay không
 *  nếu không còn thì nhận một token mới
 */
axiosAuthorization.interceptors.request.use(async (config) => {
  try {
    const _token = localStorage.getItem("token");
    config.headers.Authorization = "Bear " + (_token ? _token : "");
    if (_token) {
      const { _id, exp } = jwt_decode(_token);
      const date = new Date();
      if (exp && exp < date.getTime() / 1000) {
        const { token } = await axiosClient.get(
          `${process.env.REACT_APP_URL_SERVER}/account/refreshToken?_id=${_id}`
        );
        localStorage.setItem("token", token);
        config.headers.Authorization = "Bear " + token;
      }
    }
  } catch (error) {
    config.headers.Authorization = "Bear ";
    console.log(error);
  }
  return config;
});

axiosAuthorization.interceptors.response.use((response) => response.data);

axiosClient.interceptors.response.use((response) => response.data);
export { axiosAuthorization, axiosClient };
