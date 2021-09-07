import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import {
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Button,
  MenuItem,
  FormControl,
  Select,
  Hidden,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import LocationOn from "@material-ui/icons/LocationOn";
import AccountCircle from "@material-ui/icons/AccountCircle";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    paddingLeft: "80px",
    paddingRight: "80px",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "15px",
      paddingRight: 0,
    },
    [theme.breakpoints.up("md")]: {
      paddingLeft: "100px",
    },
  },
  toolbarTitle: {
    flex: 1,
  },
  search: {
    padding: 0,
    border: `0.5px solid #000000`,
    borderRadius: theme.shape.borderRadius,
    marginLeft: 0,
    width: "100%",
    height: "80%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  inputRoot: {
    color: "inherit",
    width: "300px",
    [theme.breakpoints.between("md", "md")]: {
      width: "140px",
    },
  },
  inputInput: {
    paddingLeft: `calc(1em + ${theme.spacing(1)}px)`,
    paddingRight: `calc(1em + ${theme.spacing(5)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
  location: {
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade("#b3b3ff", 0.15),
    marginLeft: 0,
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  locationicon: {
    color: fade("#004080", 0.45),
    padding: 0,
  },
  inputLoc: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(1)}px)`,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
  button: {
    margin: theme.spacing(1),
    backgroundColor: fade("#fff", 0.45),
  },
  margin: {
    margin: theme.spacing(3),
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const [country, setCountry] = React.useState("");
  const handleChange = (event) => {
    setCountry(event.target.value);
  };

  return (
    <React.Fragment>
      <Hidden smDown>
        <Toolbar className={classes.toolbar}>
          <Typography
            component="h2"
            variant="h5"
            color="inherit"
            noWrap
            className={classes.toolbarTitle}
          >
            cocopalms
          </Typography>
          <div className={classes.search}>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
            />
            <IconButton className={classes.locationicon}>
              <SearchIcon />
            </IconButton>
          </div>
          <div className={classes.location}>
            <InputBase
              placeholder="Choose"
              classes={{
                root: classes.inputRoot,
                input: classes.inputLoc,
              }}
            />
            <IconButton className={classes.locationicon}>
              <LocationOn />
            </IconButton>
          </div>
          <FormControl className={classes.margin}>
            <Select
              value={country}
              onChange={handleChange}
              className={classes.button}
            >
              <MenuItem value={10}>
                <img src={require("../../assets/images/india.png")} />
              </MenuItem>
              <MenuItem value={20}>
                <img src={require("../../assets/images/united-states.png")} />
              </MenuItem>
            </Select>
          </FormControl>
          <Button
            variant="contained"
            className={classes.button}
            endIcon={<AddShoppingCartIcon />}
          >
            12.5 kwd
          </Button>
          <Button
            variant="contained"
            className={classes.button}
            startIcon={<AccountCircle />}
          >
            Name
          </Button>
        </Toolbar>
      </Hidden>
      <Hidden mdUp>
        <Toolbar className={classes.toolbar}>
          <ArrowBackIosIcon />{" "}
          <Typography
            component="h2"
            variant="h5"
            color="inherit"
            //   align="center"
            noWrap
            className={classes.toolbarTitle}
          >
            Profile
          </Typography>
        </Toolbar>
      </Hidden>
    </React.Fragment>
  );
}
