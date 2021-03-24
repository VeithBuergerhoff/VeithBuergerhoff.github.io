import {
  AppBar,
  createStyles,
  IconButton,
  Theme,
  Toolbar,
  Typography,
  withStyles,
  WithStyles
} from "@material-ui/core";
import React from "react";
import MenuIcon from "@material-ui/icons/Menu";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1
    }
  });

type Props = WithStyles<typeof styles>;

const Header = withStyles(styles)(
  class HeaderImpl extends React.Component<Props> {
    render() {
      const { root, menuButton, title } = this.props.classes;
      return (
        <div className={root}>
          <AppBar position="static">
            <Toolbar>
              <IconButton edge="start" className={menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" className={title}>
                Portfolio
              </Typography>
            </Toolbar>
          </AppBar>
        </div>
      );
    }
  }
);

export default Header;
