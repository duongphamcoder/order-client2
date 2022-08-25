import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const navigate = useNavigate();
  const isLogin = localStorage.getItem("token");

  useEffect(() => {
    if (!isLogin) {
      navigate("/form/login");
    }
  }, []);
  return <div id="private_wrapper">{isLogin && children}</div>;
}

export default PrivateRoute;
