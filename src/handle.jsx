import { axiosAuthorization, axiosClient } from "./configJWT";
import swal from "sweetalert";

class Hanle {
  async handeAccount(obj, action) {
    switch (action) {
      case "CREATE": {
        const { username, password, email, address, phoneNumber } = obj;
        if (!username || !password || !email || !address || !phoneNumber) {
          swal({
            text: "Empty field...",
            icon: "error",
            buttons: false,
            timer: 1200,
          });
          return {
            emptyField: true,
          };
        } else {
          const result = {
            error: false,
            message: "Account is not valid",
          };
          return result;
        }
      }
      case "LOGIN": {
        const { username, password } = obj;
        if (!username || !password) {
          swal({
            text: "Empty field...",
            icon: "error",
            buttons: false,
            timer: 1200,
          });
          return {
            emptyField: true,
          };
        } else {
          const result = await axiosClient.post(
            `${process.env.REACT_APP_URL_SERVER}/account/login`,
            {
              ...obj,
              role: "USER_ROLE",
            }
          );
          const { error, token } = result;
          if (!error) {
            localStorage.setItem(process.env.REACT_APP_KEY_TOKEN, token);
          }
          console.log(result);
          return result;
        }
      }

      default:
        break;
    }
  }

  async handleAddToCart(obj) {
    const respone = await axiosAuthorization.post(
      `${process.env.REACT_APP_URL_SERVER}/cart/create`,
      obj
    );
    if (respone.isLogin === false) {
      window.location.assign("/form/login");
    }
    if (!respone.error) {
      swal({
        text: "Add success!",
        icon: "success",
        timer: 1200,
        buttons: false,
      });
    }
  }

  handleDeleteToCart() {}
}

export default new Hanle();
