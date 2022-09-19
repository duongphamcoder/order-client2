import { useState } from "react";

function ImageItem({ urlImage, setUrlImage }) {
  // const [urlImage, setUrlImage] = useState("");
  function handleChangeImage(event) {
    const file = event.target.files[0];
    const urlImage = URL.createObjectURL(file);
    setUrlImage(urlImage);
  }
  return (
    <div className="image_item">
      <label htmlFor="image_add_product" className="image_item-title">
        Product image
      </label>
      <div className="image_item-wrapper">
        <label
          htmlFor="image_add_product"
          style={{ backgroundImage: `url("${urlImage}")` }}
        >
          <input
            type="file"
            id="image_add_product"
            hidden
            accept="image/x-png,image/gif,image/jpeg"
            onChange={handleChangeImage}
          />
          <span
            style={{
              color: urlImage ? "transparent" : "#fff",
            }}
          >
            select image
          </span>
        </label>
      </div>
    </div>
  );
}

function ButtonSubmit({ onSubmit }) {
  return (
    <div className="button_submit--wrapper">
      <button onClick={onSubmit}>add product</button>
    </div>
  );
}

export { ImageItem, ButtonSubmit };
