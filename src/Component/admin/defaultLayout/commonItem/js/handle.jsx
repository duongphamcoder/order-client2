import jwtDecode from "jwt-decode";

const handle = {
  handleCheckAdminLogin(callback) {
    const token = localStorage.getItem(process.env.REACT_APP_KEY_TOKEN) || "";
    if (token) {
      const { role } = jwtDecode(token);
      if (role === "ADMIN_ROLE") {
        const pathname = window.location.pathname;
        if (pathname.search("login") != -1) {
          callback("/admin/dashboard", { replace: true });
        }
        callback(window.location.pathname, { replace: true });
      } else if (role === "USER_ROLE") {
        localStorage.removeItem(process.env.REACT_APP_KEY_TOKEN);
        callback("/admin/login", { replace: true });
      }
    } else {
      callback("/admin/login", { replace: true });
    }
  },
};

export default handle;
