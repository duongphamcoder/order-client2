import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./form.scss";
function Form({ children }) {
  const isLogin = localStorage.getItem("token");
  const navigate = useNavigate();
  useEffect(() => {
    if (isLogin) {
      navigate("/", { replace: true });
    }
  }, []);
  return (
    <div id="form_wrapper">
      {!isLogin && (
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div id="form_image">
                <img
                  src="https://preview.colorlib.com/theme/bootstrap/login-form-08/images/undraw_file_sync_ot38.svg"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-6">{children}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Form;
