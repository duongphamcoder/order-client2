import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { axiosClient } from "../../../../configJWT";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    const { error, token } = await axiosClient.post(
      `${process.env.REACT_APP_URL_SERVER}/account/login`,
      {
        username,
        password,
        role: "USER_ROLE",
      }
    );
    if (!error) {
      localStorage.setItem("token", token);
      window.location.replace("/");
    }
  };

  return (
    <div id="login_wrapper">
      <div className="form_title">
        <p>
          Sign in to <span style={{ color: "var(--color-main)" }}>website</span>
        </p>
      </div>
      <div className="form_desc">
        <i>Please fill out the information in the box below.</i>
      </div>
      <div className="form_input">
        <div className="form_input--item">
          <label htmlFor="username">
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <span className={`${username && "forcus"}`}>username</span>
          </label>
        </div>
        <div className="form_input--item">
          <label htmlFor="password">
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <span className={`${password && "forcus"}`}>password</span>
          </label>
        </div>
      </div>
      <div className="form_other">
        <div className="form_other--item">
          <Link to="/form/register">register?</Link>
        </div>
        <div className="form_other--item">
          <Link to="#">forgot password?</Link>
        </div>
      </div>
      <div className="form_submit">
        <button onClick={handleLogin}>Login</button>
      </div>
      <div className="login_orther">
        <div className="login_orther--title">
          <p>or sign in with</p>
        </div>
        <div className="login_orther--list">
          <div className="login_orther--item facebook">
            <ion-icon name="logo-facebook"></ion-icon>
          </div>
          <div className="login_orther--item google">
            <ion-icon name="logo-google"></ion-icon>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
