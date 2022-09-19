import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCheck } from "@fortawesome/free-solid-svg-icons";
import swal from "sweetalert";

import { axiosClient } from "../../../configJWT";
import handle from "../defaultLayout/commonItem/js/handle";

import "./login_admin.scss";

function AdminLoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async () => {
    const { error, message, token } = await axiosClient.post(
      `${process.env.REACT_APP_URL_SERVER}/account/login`,
      {
        username: username,
        password: password,
        role: "ADMIN_ROLE",
      }
    );
    if (error) {
      swal({
        text: message,
        icon: "error",
        button: false,
        timer: 1000,
      });
    } else {
      localStorage.setItem(process.env.REACT_APP_KEY_TOKEN, token);
      window.location.replace("/admin/dashboard");
    }
  };

  useEffect(() => {
    handle.handleCheckAdminLogin(navigate);
  }, []);

  return (
    <div id="admin_login_wrapper">
      <div id="admin_login_form">
        <div id="admin_login_title-icon">
          <FontAwesomeIcon icon={faUserCheck} />
        </div>
        <div id="admin_login_form-group">
          <div className="admin_login_form-item">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>
          <div className="admin_login_form-item">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
        </div>
        <div id="admin_login_form-btn">
          <button onClick={handleSubmit}>get started</button>
        </div>
      </div>
    </div>
  );
}

export default AdminLoginPage;
