import React from "react";
import PropTypes from "prop-types";
import Appbar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import classNames from "clsx";
import styles from "./styles";

const defaultContent = <Typography>82TechMeds</Typography>;

/**
 * Reusable generic app bar component with consistent styling throughout app
 * A variant of this should appear at the top of every view
 * */

function GenericAppBar({ classes, content, children, fixed, className }) {
  return (
    <Appbar
      className={classNames(classes.appbar, className)}
      position={fixed ? "fixed" : "relative"}
      elevation={0}
    >
      <Toolbar
        disableGutters={true}
        variant="dense"
        classes={{ gutters: classes.toolbar }}
      >
        {children || content}
      </Toolbar>
    </Appbar>
  );
}

GenericAppBar.propTypes = {
  /**
   * Styling for this component
   * */
  classes: PropTypes.shape({}).isRequired,
  /**
   * Content of the appbar (must be a React Component)
   */
  content: PropTypes.node,
  /**
   * Whether app bar is fixed at top
   */
  fixed: PropTypes.bool
};

GenericAppBar.defaultProps = {
  content: defaultContent,
  fixed: false
};

export default withStyles(styles)(GenericAppBar);
