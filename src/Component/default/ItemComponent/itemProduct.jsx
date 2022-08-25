import { useState } from "react";

function ProductItem({ item, handleAddToCart }) {
  const [quantity, setQuantity] = useState(item.quantity || 1);
  return (
    <div className="col-md-12 col-lg-6" key={item._id}>
      <div className="product_item">
        <div className="img_product">
          <img src={`${item.photoURL}`} alt="" />
        </div>
        <div className="infor_product">
          <div className="infor_product_head">
            <div className="infor_product_head--name">
              <span>{item.name}</span>
            </div>
            <div className="infor_product_head--price">
              <span>{item.price}</span>
            </div>
          </div>
          <div className="infor_product_content">
            <span>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </span>
          </div>
          <div className="infor_product_btn_change">
            <div className="quantity_change">
              <input
                type="number"
                name=""
                id=""
                min={1}
                value={quantity}
                onChange={(e) => {
                  setQuantity(e.target.value);
                }}
              />
            </div>
            <div className="btn_add_to_cart">
              <button
                className="btn_custom active capitalize"
                disabled={typeof quantity === Number}
                onClick={() => {
                  handleAddToCart({
                    product_id: item._id,
                    quantity: quantity,
                  });
                }}
              >
                add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
