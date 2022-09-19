import FormGroup from "./item/form_group";
import ImageGroup from "./item/image_gruop";
import "./css/add_product.scss";
import { createContext, useState } from "react";

export const AddProductProvider = createContext();

function AddProduct() {
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDesciption] = useState("");
  const [urlImage, setUrlImage] = useState("");

  const handleAddproduct = () => {
    console.log("description main", description);
    console.log("productName main", productName);
    console.log("category main", category);
  };

  const context = {
    name: {
      productName,
      setProductName,
    },
    category: {
      category,
      setCategory,
    },
    desc: {
      description,
      setDesciption,
    },
    image: {
      urlImage,
      setUrlImage,
    },
    handle: handleAddproduct,
  };

  return (
    <AddProductProvider.Provider value={context}>
      <div id="admin_add_product-wrapper" className=" container">
        <div className="row">
          <div className="col-lg-6">
            <FormGroup />
          </div>
          <div className="col-lg-6">
            <ImageGroup onSubmit={handleAddproduct} />
          </div>
        </div>
      </div>
    </AddProductProvider.Provider>
  );
}

export default AddProduct;
