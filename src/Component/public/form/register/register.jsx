import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input, Button } from "../../../default/ItemComponent/itemForm";

import handle from "../../../../handle";
import swal from "sweetalert";

// chưa check điều kiện sai cho tất cả các trường
function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

  const refUsername = useRef();
  const navigate = useNavigate();
  const handleRegister = async () => {
    const { emptyField, error, isAccount, message } = await handle.handeAccount(
      { username, password, email, phoneNumber, address },
      "CREATE"
    );
    if (error === true) {
      swal({
        text: message,
        icon: "error",
        buttons: false,
        timer: 1200,
      });
    } else if (error === false) {
      navigate("/form/login", { replace: true });
    }
  };

  return (
    <div id="register_wrapper">
      <div className="form_title">
        <p>Sign up</p>
      </div>

      <div className="form_input">
        <Input
          type={"text"}
          label={"username"}
          value={username}
          onChange={setUsername}
          uref={refUsername}
        />
        <Input
          type={"password"}
          label={"password"}
          value={password}
          onChange={setPassword}
        />
        <Input
          type={"text"}
          label={"email"}
          value={email}
          onChange={setEmail}
        />
        <Input
          type={"text"}
          label={"address"}
          value={address}
          onChange={setAddress}
        />
        <Input
          type={"text"}
          label={"phone number"}
          value={phoneNumber}
          onChange={setPhoneNumber}
        />
      </div>
      <div className="form_other">
        <div className="form_other--item">
          {/* <Link to="/form/register">login?</Link> */}
        </div>
        <div className="form_other--item">
          <Link to="/form/login">login to website.</Link>
        </div>
      </div>
      <Button text={"register"} handle={handleRegister} />
    </div>
  );
}

export default RegisterPage;
