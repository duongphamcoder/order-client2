import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const navigate = useNavigate();
  const isLogin = localStorage.getItem(process.env.REACT_APP_KEY_TOKEN);

  useEffect(() => {
    if (!isLogin) {
      navigate("/form/login");
    }
  }, []);
  return <div id="private_wrapper">{isLogin && children}</div>;
}

export default PrivateRoute;
