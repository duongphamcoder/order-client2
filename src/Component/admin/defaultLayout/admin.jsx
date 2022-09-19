import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import handle from "./commonItem/js/handle";

import AHeader from "./header/header";
import ANavbar from "./navbar/navbar";

import "./css/index.scss";

function DashBoard({ children }) {
  const [isAdmin, setIsAdmin] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    handle.handleCheckAdminLogin(navigate);
  }, []);

  return (
    <div id="dashboard-wrapper" className="flex">
      <div className="dashboard--item-wrapper">
        <ANavbar />
      </div>
      <div className="dashboard--item-wrapper" style={{ flex: "1" }}>
        <AHeader />
        <div id="admin_content-wrapper">
          <div className="container">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
