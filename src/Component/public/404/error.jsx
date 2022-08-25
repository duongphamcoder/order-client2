import { useLayoutEffect } from "react";

function ErrorPage() {
  useLayoutEffect(() => {
    window.location.replace("/");
  }, []);
  return <></>;
}

export default ErrorPage;
