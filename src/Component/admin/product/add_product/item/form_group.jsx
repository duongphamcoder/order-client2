import { useContext } from "react";
import { AddProductProvider } from "../add_product";
import { InputItem, AreaItem, SelectItem } from "./profile_product";

function FormGroup() {
  const { name, category, desc } = useContext(AddProductProvider);
  console.log("Context", name);
  return (
    <div id="form_group-wrapper">
      <div className="form_group-item">
        <InputItem
          lable={"product name"}
          text={name.productName}
          handle={name.setProductName}
        />
      </div>
      <div className="form_group-item">
        <SelectItem
          lable={"category"}
          text={category.category}
          handle={category.setCategory}
        />
      </div>
      <div className="form_group-item">
        <AreaItem
          lable={"description"}
          text={desc.description}
          handle={desc.setDesciption}
        />
      </div>
    </div>
  );
}

export default FormGroup;
