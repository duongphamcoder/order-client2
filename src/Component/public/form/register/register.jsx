import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { axiosClient } from "../../../../configJWT";

// chưa check điều kiện sai cho tất cả các trường
function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();
  const handleRegister = async () => {
    try {
      const respone = await axiosClient.post(
        `${process.env.REACT_APP_URL_SERVER}/account/create`,
        {
          username,
          password,
          email,
          address,
          phoneNumber,
        }
      );
      console.log(respone);
      if (respone.error === false) {
        navigate("/form/login", { replace: true });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div id="register_wrapper">
      <div className="form_title">
        <p>Sign up</p>
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
        <div className="form_input--item">
          <label htmlFor="email">
            <input
              type="text"
              id="address"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <span className={`${email && "forcus"}`}>email</span>
          </label>
        </div>
        <div className="form_input--item">
          <label htmlFor="address">
            <input
              type="text"
              id="address"
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />
            <span className={`${address && "forcus"}`}>address</span>
          </label>
        </div>
        <div className="form_input--item">
          <label htmlFor="phone_number">
            <input
              type="text"
              id="phone_number"
              value={phoneNumber}
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
            />
            <span className={`${phoneNumber && "forcus"}`}>phone number</span>
          </label>
        </div>
      </div>
      <div className="form_other">
        <div className="form_other--item">
          {/* <Link to="/form/register">login?</Link> */}
        </div>
        <div className="form_other--item">
          <Link to="/form/login">login to website.</Link>
        </div>
      </div>
      <div className="form_submit">
        <button onClick={handleRegister}>Register</button>
      </div>
    </div>
  );
}

export default RegisterPage;
