import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function OtherOrderPage() {
  const redirect = useNavigate();
  useEffect(() => {
    redirect("/order/full-menu", { replace: true });
  }, []);
  return <div className=""></div>;
}

export default OtherOrderPage;
