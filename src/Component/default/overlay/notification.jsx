import { faXmark, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { axiosAuthorization } from "../../../configJWT";
import { useEffect, useState, useMemo } from "react";
import CartItem from "../../default/ItemComponent/cartItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import swal from "sweetalert";
import "./notification.scss";

function OverlayNotification({ handleOverlay }) {
  const [products, setProducts] = useState([]);
  const [quantitys, setQuantitys] = useState();
  const isLogin = localStorage.getItem("token");

  // xử lý xóa sản phẩm
  const handleDeteleProduct = async (_id) => {
    const { error } = await axiosAuthorization.delete(
      `${process.env.REACT_APP_URL_SERVER}/cart/delete?id=${_id}`
    );
    if (!error) {
      setQuantitys((prev) => {
        delete prev[_id];
        return prev;
      });
      setProducts((prev) => {
        const newProds = prev.filter((item) => item.cart_id != _id);
        return newProds;
      });
    }
  };

  // xử lý thanh toán
  const handlePayment = async () => {
    const { error, message } = await axiosAuthorization.put(
      `${process.env.REACT_APP_URL_SERVER}/cart/payment`,
      {
        quantitys,
      }
    );
    swal({
      icon: !error ? "success" : "error",
      text: message,
      buttons: false,
      timer: 1200,
    });
    if (!error) {
      setProducts([]);
      setQuantitys();
    }
  };

  useEffect(() => {
    axiosAuthorization
      .get(`${process.env.REACT_APP_URL_SERVER}/cart`)
      .then((res) => {
        setProducts(res.result);
        setQuantitys(res.quantitys);
      });
  }, []);

  // tính tổng tiền
  const total = useMemo(() => {
    const total = products.reduce((result, prod_curr) => {
      return (
        result +
        prod_curr.price *
          (quantitys[prod_curr.cart_id] ? quantitys[prod_curr.cart_id] : 1)
      );
    }, 0);
    return total;
  }, [quantitys, products]);

  console.log("quantitys", quantitys);
  console.log("products", products);

  return (
    <div
      id="overlay_notification--wraper"
      onClick={() => {
        handleOverlay(false);
      }}
    >
      <div
        id="overlay_notification--main-wraper"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div id="overlay_notification--head">
          <div id="overlay_notification--head-infor" className="">
            {isLogin && (
              <Link
                to="/user/profile"
                className="text-2xl font-bold mb-0"
                style={{ color: "var(--color-main)" }}
              >
                Your Profile
              </Link>
            )}
          </div>
          <div
            id="btn_close_overlay"
            onClick={() => {
              handleOverlay(false);
            }}
          >
            <FontAwesomeIcon icon={faXmark} />
          </div>
        </div>
        <div id="overlay_notification--content">
          {!isLogin && (
            <div className="btn_redirect">
              <div className="text-center">
                <p className="text-gray-500">Please login to continue.</p>
                <Link
                  to="/form/login"
                  className="inline-block btn_custom active py-2 px-4 no-underline uppercase"
                >
                  login
                </Link>
              </div>
            </div>
          )}

          {isLogin && (
            <div id="overlay_notification--content--cart">
              {products.map((item, index) => {
                return (
                  <CartItem
                    item={item}
                    quantitys={quantitys}
                    onChangeQuantity={setQuantitys}
                    onDelete={handleDeteleProduct}
                    key={item._id}
                  />
                );
              })}
            </div>
          )}
        </div>
        {isLogin && (
          <div id="overlay_notification--payment" className="">
            <div className="overlay_notification--payment--total flex items-center justify-between">
              <div className="overlay_notification--payment--total--item">
                <p className="capitalize text-xl font-semibold text-gray-500">
                  Subtotal
                </p>
              </div>
              <div className="overlay_notification--payment--total--item">
                <p className="overlay_notification--payment--total--item-text text-xl font-bold">
                  {total}
                </p>
              </div>
            </div>
            <button
              className="btn_custom active w-full py-3"
              disabled={!Boolean(products.length)}
              onClick={handlePayment}
            >
              Continue to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default OverlayNotification;
