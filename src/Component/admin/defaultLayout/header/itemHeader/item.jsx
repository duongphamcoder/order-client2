import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faGear,
  faArrowRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const handle = {
  handleChangeListControl(className) {
    const unAcitve = document.querySelector(`.${className}_.unActive`);
    const active = document.querySelector(`.${className}_.active`);
    if (unAcitve) {
      unAcitve.classList.remove("unActive");
      unAcitve.classList.add("active");
    } else {
      active.classList.add("unActive");
      active.classList.remove("active");
    }
  },
};

function ControlOverlayItem({ name, icon, onClick }) {
  return (
    <div className="list_control-item" onClick={onClick}>
      <FontAwesomeIcon icon={icon} className="icon" />
      <p>{name}</p>
    </div>
  );
}

function ListControlOverlay({ items, title, width }) {
  return (
    <ul
      className={`${title}_ unActive list_control`}
      style={{ width: width }}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <div className="list_control-title">
        <p>{title}</p>
      </div>
      {items.map((item, index) => {
        return (
          <ControlOverlayItem
            name={item.name}
            icon={item.icon}
            onClick={item.handle}
            key={index}
          />
        );
      })}
    </ul>
  );
}

function ItemControl({ icon, title }) {
  const items = [
    { name: "profile", icon: faBell, handle() {} },
    { name: "setting", icon: faGear, handle() {} },
    {
      name: "logout",
      icon: faArrowRightToBracket,
      handle() {
        alert("Logout");
      },
    },
  ];
  return (
    <div
      className="header_control-item"
      onClick={() => {
        handle.handleChangeListControl(title);
      }}
    >
      <FontAwesomeIcon icon={icon} />
      <ListControlOverlay width={"150px"} items={items} title={title} />
    </div>
  );
}

function AvatarUser({ photoURL }) {
  const items = [
    { name: "profile", icon: faBell, handle() {} },
    { name: "setting", icon: faGear, handle() {} },
    {
      name: "logout",
      icon: faArrowRightToBracket,
      handle() {
        localStorage.removeItem(process.env.REACT_APP_KEY_TOKEN);
        window.location.replace("/admin/login");
      },
    },
  ];
  return (
    <div id="avatar_admin">
      <div
        id="image"
        onClick={() => {
          handle.handleChangeListControl("account");
        }}
      >
        <img src={photoURL} alt="" />
      </div>
      <ListControlOverlay width={"150px"} items={items} title={"account"} />
    </div>
  );
}

export { ItemControl, AvatarUser };
