import TableItem from "../defaultLayout/commonItem/tableI_item";

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

function AllACcount() {
  return (
    <div id="admin_all_account-wrapper">
      <TableItem datas={datas} />
    </div>
  );
}

export default AllACcount;
