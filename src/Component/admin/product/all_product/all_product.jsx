import TableItem from "../../defaultLayout/commonItem/tableI_item";
import "./css/all_product.scss";

const datas = [
  {
    name: "Sana Amrin",
    date_created: "2012/08/23",
    price: "30.000",
    status: "active",
  },
  {
    name: "Sana Amrin Jonh",
    date_created: "2012/08/23",
    price: "30.000",
    status: "inactive",
  },
  {
    name: "Sana Amrin",
    date_created: "2012/08/23",
    price: "30.000",
    status: "active",
  },
  {
    name: "Sana Amrin Jonh",
    date_created: "2012/08/23",
    price: "30.000",
    status: "inactive",
  },
  {
    name: "Sana Amrin",
    date_created: "2012/08/23",
    price: "30.000",
    status: "active",
  },
  {
    name: "Sana Amrin Jonh",
    date_created: "2012/08/23",
    price: "30.000",
    status: "inactive",
  },
  {
    name: "Sana Amrin",
    date_created: "2012/08/23",
    price: "30.000",
    status: "active",
  },
  {
    name: "Sana Amrin Jonh",
    date_created: "2012/08/23",
    price: "30.000",
    status: "inactive",
  },
  {
    name: "Sana Amrin",
    date_created: "2012/08/23",
    price: "30.000",
    status: "active",
  },
  {
    name: "Sana Amrin Jonh",
    date_created: "2012/08/23",
    price: "30.000",
    status: "inactive",
  },
];

function AllProduct() {
  return (
    <div id="all_product--wrapper" className="">
      <TableItem datas={datas} />
    </div>
  );
}

export default AllProduct;
