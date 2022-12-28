import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import SettingsIcon from "@mui/icons-material/Settings";

const useStyles = makeStyles({
  root: {
    background: "rgb(77, 82, 183)",
    borderRadius: 3,
    border: 0,
    color: "white",
    padding: "0 10px",
    boxShadow: "0 3px 5px 2px rgba(0,0,0, .3)",
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
});

const customTheme = makeStyles({
  root: {
    color: "rgb(101, 106, 197)",
  },
});

export default function MenuAppBar(props) {
  const classes = useStyles();
  const [auth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const classTheme = customTheme();
  return (
    <div>
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {props.items[1].name}
          </Typography>
          {auth && (
            <div>
              <IconButton
                aria-label="settings"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <SettingsIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose} className={classTheme.root}>
                  {props.items[2].name1}
                </MenuItem>
                <MenuItem onClick={handleClose} className={classTheme.root}>
                  {props.items[2].name2}
                </MenuItem>
                <MenuItem onClick={handleClose} className={classTheme.root}>
                  {props.items[2].name3}
                </MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
