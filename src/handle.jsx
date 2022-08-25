import { axiosAuthorization } from "./configJWT";
import swal from "sweetalert";

class Hanle {
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
