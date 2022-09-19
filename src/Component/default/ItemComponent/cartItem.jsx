import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import { axiosAuthorization } from "../../../configJWT";

function CartItem({ item, quantitys, onChangeQuantity, onDelete }) {
  const _debouce = useRef(null);

  const handleChangeQuantity = function (e) {
    let value = e.target.value;
    onChangeQuantity((prev) => {
      return {
        ...prev,
        [item.cart_id]: value,
      };
    });
    clearTimeout(_debouce.current);
    const timeOut_id = setTimeout(async () => {
      const cart_id = item.cart_id;
      await axiosAuthorization.put(
        `${process.env.REACT_APP_URL_SERVER}/cart/update-quantity`,
        { cart_id, quantity: value }
      );
    }, 600);
    _debouce.current = timeOut_id;
  };

  return (
    <div
      className="overlay_notification--content--cart--item flex justify-between items-center"
      id={`${item.cart_id}`}
    >
      <div className="flex items-center">
        <div className="overlay_notification--content--cart--item-image">
          <img src={item.photoURL} alt="" />
        </div>
        <div className="overlay_notification--content--cart--item-infor px-2">
          <span className="overlay_notification--content--cart--item-infor-name block text-md font-bold">
            {item.name}
          </span>
          <span className="overlay_notification--content--cart--item-infor-price block">
            {item.price}
          </span>
        </div>
      </div>
      <div className="flex items-center">
        <div className="overlay_notification--content--cart--item-quantity">
          <input
            type="number"
            value={quantitys[`${item.cart_id}`]}
            min={1}
            onChange={handleChangeQuantity}
          />
        </div>
        <div className="overlay_notification--content--cart--item-btn_delete">
          <div
            className="btn_delete-cart-item inline-block"
            onClick={() => {
              onDelete(item.cart_id);
            }}
          >
            <FontAwesomeIcon icon={faTrash} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
