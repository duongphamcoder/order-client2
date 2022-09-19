import { NavItem } from "./itemNavbar/navitem";
import {
  faHouse,
  faPlus,
  faList,
  faUser,
  faFile,
} from "@fortawesome/free-solid-svg-icons";
import "../css/navbar.scss";

function ANavbar() {
  const navitems = [
    {
      title: "dashboard",
      items: [
        {
          name: "home",
          icon: faHouse,
          path: "/admin/dashboard",
        },
      ],
    },
    {
      title: "product",
      items: [
        {
          name: "all product",
          icon: faList,
          path: "/admin/all-product",
        },
        {
          name: "add product",
          icon: faPlus,
          path: "/admin/add-product",
        },
      ],
    },
    {
      title: "account",
      items: [
        {
          name: "all account",
          icon: faUser,
          path: "/admin/all-account",
        },
      ],
    },
  ];
  return (
    <div id="aNavbar-wrapper" className="">
      <div id="aNavbar_logo"></div>
      <div id="list_navbar">
        {navitems.map((item, index) => (
          <NavItem key={index} title={item.title} items={item.items} />
        ))}
      </div>
    </div>
  );
}

export default ANavbar;
