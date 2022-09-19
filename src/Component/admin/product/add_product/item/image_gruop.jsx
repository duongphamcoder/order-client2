import { useState, useContext } from "react";
import { AddProductProvider } from "../add_product";
import { ImageItem, ButtonSubmit } from "./image_product";

function ImageGroup() {
  const { image, handle } = useContext(AddProductProvider);
  return (
    <div id="image_group-wrapper">
      <ImageItem urlImage={image.urlImage} setUrlImage={image.setUrlImage} />
      <ButtonSubmit onSubmit={handle} />
    </div>
  );
}

export default ImageGroup;
