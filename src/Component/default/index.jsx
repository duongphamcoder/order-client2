import "./index.scss";
import Header from "./header/header";
import Footer from "./footer/footer";
import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import OverlayNotification from "./overlay/notification";

function DefaultComponent({ children }) {
  const [overlay, setOverlay] = useState(false);
  return (
    <div id="default_wrapper">
      <Header handleOverlay={setOverlay}></Header>
      <div id="content" className="min-h-screen">
        {children}
      </div>
      <Footer></Footer>
      {overlay && <OverlayNotification handleOverlay={setOverlay} />}
    </div>
  );
}

export default DefaultComponent;
