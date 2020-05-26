import React, { Fragment } from "react";
import Container from "@material-ui/core/Container";
import PropTypes from "prop-types";
import GenericAppBar from "../../components/Shared/GenericAppBar/GenericAppBar";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Container maxWidth="sm">
        <GenericAppBar />
        {children}
      </Container>
    </Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.object
};

export default Layout;
