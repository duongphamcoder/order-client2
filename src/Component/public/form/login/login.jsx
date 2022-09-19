import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Input, Button } from "../../../default/ItemComponent/itemForm";

import handle from "../../../../handle";
import swal from "sweetalert";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    const { error, message } = await handle.handeAccount(
      { username, password },
      "LOGIN"
    );
    if (error === true) {
      swal({
        text: message,
        icon: "error",
        buttons: false,
        timer: 1200,
      });
    } else if (error === false) {
      console.log("12323");
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
        <Input
          type={"text"}
          label={"username"}
          value={username}
          onChange={setUsername}
        />
        <Input
          type={"password"}
          label={"password"}
          value={password}
          onChange={setPassword}
        />
      </div>
      <div className="form_other">
        <div className="form_other--item">
          <Link to="/form/register">register?</Link>
        </div>
        <div className="form_other--item">
          <Link to="#">forgot password?</Link>
        </div>
      </div>
      <Button text={"Login"} handle={handleLogin}></Button>
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
