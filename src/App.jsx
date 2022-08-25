import { Fragment, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RoutesPubic, RoutesPrivate } from "./routes";

import PrivateRoute from "./Component/private";

function App() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  return (
    <div className="App x">
      <BrowserRouter>
        <Routes>
          {RoutesPrivate.map((item, index) => {
            const DefaultLayout = item.layout || Fragment;
            const Component = item.component;
            const path = item.path;
            const Children = item.children || Fragment;
            return (
              <Route
                path={path}
                element={
                  <PrivateRoute>
                    <DefaultLayout>
                      <Component>
                        <Children />
                      </Component>
                    </DefaultLayout>
                  </PrivateRoute>
                }
                key={path}
              />
            );
          })}
          {RoutesPubic.map((item, index) => {
            const DefaultLayout = item.layout || Fragment;
            const Component = item.component;
            const path = item.path;
            const Children = item.children || Fragment;
            return (
              <Route
                path={path}
                element={
                  <DefaultLayout>
                    <Component>
                      <Children />
                    </Component>
                  </DefaultLayout>
                }
                key={path}
              />
            );
          })}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
