import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import HomeContainer from "./containers/Home/Home";
import withRoot from "./withRoot";

const Root = ({ route, children }) => {
  return (
    <div>
      {renderRoutes(route.routes)}
      {children}
    </div>
  );
};

Root.propTypes = {
  route: PropTypes.object,
  children: PropTypes.object
};

const routes = [
  {
    path: "/",
    component: withRoot(withRouter(Root)),
    init: "./init-top",
    routes: [
      {
        path: "/",
        exact: true,
        component: HomeContainer
      }
    ]
  }
];

export { routes };
