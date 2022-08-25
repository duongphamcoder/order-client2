import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faTrash } from "@fortawesome/free-solid-svg-icons";

function CartItem({ item, quantitys, onChangeQuantity, onDelete }) {
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
            onChange={(e) => {
              onChangeQuantity((prev) => {
                let value = e.target.value;

                return {
                  ...prev,
                  [item.cart_id]: value,
                };
              });
            }}
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
