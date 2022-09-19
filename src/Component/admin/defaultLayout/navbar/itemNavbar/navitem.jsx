import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

function NavItem({ title, items }) {
  return (
    <div className="nav_item">
      <div className="nav_item_title">
        <p>{title}</p>
      </div>
      <div className="nav_item-list">
        {items.map((item, index) => (
          <NavLink key={index} to={item.path} className={`nav_item-list-item`}>
            <div className="nav_item-list-item-icon">
              <FontAwesomeIcon icon={item.icon} />
            </div>
            <div className="nav_item-list-item-name">
              <p>{item.name}</p>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export { NavItem };
