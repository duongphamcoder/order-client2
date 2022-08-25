import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

function Header({ handleOverlay }) {
  const li_tag = "block";
  const navbar_item =
    "navbar_item  block text-gray-400 no-underline px-3 capitalize text-md";
  return (
    <div
      id="header_wraper"
      className="container py-3 w-full  flex items-center justify-between px-4"
    >
      <div id="header_logo" className="h-full ">
        <Link to="/" className="flex items-center h-full">
          <img
            src="https://assets.website-files.com/5e865e09d8efa3310676b585/5e865e09d8efa341ab76b5e7_Logo.svg"
            alt=""
            srcset=""
            className="h-12 rounded-lg"
          />
        </Link>
      </div>
      <div id="header_navbar" className="h-full flex items-center">
        <ul className="navbar_list h-full flex items-center m-0">
          <li className={`${li_tag}`}>
            <NavLink
              to="/"
              className={`${navbar_item} ${({ isActive }) =>
                isActive && "active"}`}
            >
              home
            </NavLink>
          </li>
          <li className={`${li_tag}`}>
            <NavLink
              to="/order"
              className={`${navbar_item} ${({ isActive }) =>
                isActive && "active"}`}
            >
              order
            </NavLink>
          </li>
          <li className={`${li_tag}`}>
            <NavLink
              to="/company"
              className={`${navbar_item} ${({ isActive }) =>
                isActive && "active"}`}
            >
              company
            </NavLink>
          </li>
          <li className={`${li_tag}`}>
            <NavLink
              to="/contact"
              className={`${navbar_item} ${({ isActive }) =>
                isActive && "active"}`}
            >
              contact
            </NavLink>
          </li>
          <li className={`${li_tag}`}>
            <button
              className={`notification_btn inline-block no-underline pl-3`}
              onClick={() => {
                handleOverlay(true);
              }}
            >
              <span className="navbar_item-cart flex w-16 h-16 text-3xl text-white items-center justify-center rounded-lg">
                <FontAwesomeIcon icon={faBell} />
              </span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
