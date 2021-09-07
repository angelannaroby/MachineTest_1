import React from "react";
import { useStyles } from "./ProfileUseStyles";
import {
  Grid,
  Typography,
  TextField,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  Container,
  Paper,
  Button,
  FormHelperText,
  Hidden,
  IconButton,
  Avatar,
  Popover,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
} from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import PhotoSizeSelectActualIcon from "@material-ui/icons/PhotoSizeSelectActual";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import CloseIcon from "@material-ui/icons/Close";

export default function Profile() {
  const classes = useStyles();
  const [language, setLanguage] = React.useState("");
  const [month, setMonth] = React.useState("");
  const [year, setYear] = React.useState("");
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };
  const handleMonth = (event) => {
    setMonth(event.target.value);
  };
  const handleYear = (event) => {
    setYear(event.target.value);
  };

  return (
    <div className={classes.root}>
      <React.Fragment>
        <Container maxWidth="lg" className={classes.container}>
          <Typography variant="h5" gutterBottom className={classes.main}>
            Your Profile
          </Typography>
          <Container fixed style={{ padding: 15 }}>
            <Grid container direction="row">
              <Grid item xs={12} sm={8}>
                <Typography variant="h6" gutterBottom className={classes.sub}>
                  Prefered Language
                </Typography>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={8} lg={8}>
                    <FormControl
                      variant="outlined"
                      className={classes.formControl}
                    >
                      <InputLabel>Select Language</InputLabel>
                      <Select value={language} onChange={handleChange}>
                        <MenuItem value="">None</MenuItem>
                        <MenuItem value={10}>English</MenuItem>
                        <MenuItem value={20}>Russian</MenuItem>
                        <MenuItem value={30}>Spanish</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
              </Grid>
              <div className={classes.changePhoto}>
                <Grid item xs={12} sm={4} lg={4}>
                  <img
                    src={require("../../assets/images/chgphoto.jpg")}
                  />
                  <Button
                    aria-describedby={id}
                    color="primary"
                    onClick={handleClick}
                    className={classes.centered}
                  >
                    Click to add image
                  </Button>
                  <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "top",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                  >
                    <Paper elevation={0}>
                      <List component="nav" aria-label="main mailbox folders">
                        <ListItem button>
                          <ListItemIcon>
                            <PhotoSizeSelectActualIcon />
                          </ListItemIcon>
                          <ListItemText primary="Choose From Gallery" />
                        </ListItem>
                        <Divider />
                        <ListItem button>
                          <ListItemIcon>
                            <PhotoCameraIcon />
                          </ListItemIcon>
                          <ListItemText primary="Take a Photo" />
                        </ListItem>
                      </List>
                    </Paper>
                  </Popover>
                </Grid>
              </div>
            </Grid>
          </Container>
          <Container fixed style={{ padding: 15 }}>
            <Typography variant="h6" gutterBottom className={classes.sub}>
              Login and Security
            </Typography>
            <Grid container spacing={3} className={classes.gridBlock}>
              <Grid item xs={12} sm={2}>
                <Typography style={{ paddingTop: 8 }}>Name</Typography>
              </Grid>
              <Grid item xs={8} sm={5}>
                <TextField
                  className={classes.textfield}
                  defaultValue="Name"
                  variant="outlined"
                  // size="medium"
                />
              </Grid>
              <Grid item xs={4} sm={2}>
                <Button
                  size="medium"
                  variant="outlined"
                  className={classes.editbutton}
                >
                  Edit
                </Button>
              </Grid>
            </Grid>
            <Grid container spacing={3} className={classes.gridBlock}>
              <Grid item xs={12} sm={2}>
                <Typography style={{ paddingTop: 8 }}>Email</Typography>
              </Grid>
              <Grid item xs={8} sm={5}>
                <TextField
                  className={classes.textfield}
                  defaultValue="email.id"
                  variant="outlined"
                  // size="medium"
                />
              </Grid>
              <Grid item xs={4} sm={2}>
                <Button
                  size="medium"
                  variant="outlined"
                  className={classes.editbutton}
                >
                  Edit
                </Button>
              </Grid>
            </Grid>
            <Grid container spacing={3} className={classes.gridBlock}>
              <Grid item xs={12} sm={2}>
                <Typography style={{ paddingTop: 8 }}>Mobile Number</Typography>
              </Grid>
              <Grid item xs={8} sm={5}>
                <TextField
                  className={classes.textfield}
                  defaultValue="+(123) 4567890"
                  variant="outlined"
                  // size="medium"
                />
              </Grid>
              <Grid item xs={4} sm={2}>
                <Button
                  // size="medium"
                  variant="outlined"
                  className={classes.editbutton}
                >
                  Edit
                </Button>
              </Grid>
            </Grid>
            <Grid container spacing={3} className={classes.gridBlock}>
              <Grid item xs={12} sm={2}>
                <Typography style={{ paddingTop: 8 }}>Password</Typography>
              </Grid>
              <Grid item xs={8} sm={5}>
                <TextField
                  type="password"
                  className={classes.textfield}
                  defaultValue="**********"
                  variant="outlined"
                  // size="medium"
                />
              </Grid>
              <Grid item xs={4} sm={2}>
                <Button
                  size="large"
                  variant="outlined"
                  className={classes.editbutton}
                >
                  Edit
                </Button>
              </Grid>
            </Grid>
            <Grid container spacing={3} className={classes.gridBlock}>
              <Grid item xs={12} sm={2}></Grid>
              <Grid item xs={12} sm={5}>
                <Button
                  size="medium"
                  variant="outlined"
                  className={classes.savebutton}
                >
                  Save Changes
                </Button>
              </Grid>
              <Grid item xs={4} sm={2}></Grid>
            </Grid>
          </Container>

          <Container fixed style={{ padding: 15 }}>
            <Typography variant="h6" gutterBottom className={classes.sub}>
              Saved Cards
            </Typography>
            <Paper variant="outlined" className={classes.paper}>
              <Grid container direction="row" className={classes.savedCard}>
                <Hidden smDown>
                  <Grid item xs={12} sm={1}>
                    {/* <StarIcon /> */}
                    <FiberManualRecordIcon className={classes.dot} />
                  </Grid>
                </Hidden>
                <Grid item xs={12} sm={5}>
                  <Typography>
                    SBI Credit Card **** 1234{" "}
                    <img src={require("../../assets/images/visa.png")} />
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={2}>
                  <Typography>John Doe</Typography>
                </Grid>
                <Grid item xs={12} sm={2}>
                  <Typography>Expires 12/2025</Typography>
                </Grid>
                <Hidden smDown>
                  <Grid item xs={1} sm={1}>
                    <Button>
                      <CloseIcon className={classes.closeIcon} />
                    </Button>
                  </Grid>
                </Hidden>
              </Grid>
            </Paper>
          </Container>

          <Container fixed style={{ padding: 15 }}>
            <Typography variant="h6" gutterBottom className={classes.subCard}>
              Add a New Card
            </Typography>
            <Grid container spacing={1}>
              <FormControl className={classes.space}>
                <FormHelperText>Name on Card</FormHelperText>
                <TextField
                  className={classes.textfield}
                  defaultValue=""
                  variant="outlined"
                  size="small"
                />
              </FormControl>
              <FormControl className={classes.space}>
                <FormHelperText>Card Number</FormHelperText>
                <TextField
                  className={classes.textfield}
                  defaultValue=""
                  variant="outlined"
                  size="small"
                />
              </FormControl>
              <FormControl variant="outlined">
                <FormHelperText>Expiry Date</FormHelperText>
                <Grid container direction="row">
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={month}
                    onChange={handleMonth}
                    label="Age"
                    className={classes.expiryMSelect}
                  >
                    <MenuItem value="">
                      <em>Select</em>
                    </MenuItem>
                    <MenuItem value={1}>01</MenuItem>
                    <MenuItem value={2}>02</MenuItem>
                    <MenuItem value={3}>03</MenuItem>
                  </Select>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={year}
                    onChange={handleYear}
                    label="Age"
                    className={classes.expiryYrSelect}
                  >
                    <MenuItem value="">
                      <em>Select</em>
                    </MenuItem>
                    <MenuItem value={1}>2019</MenuItem>
                    <MenuItem value={2}>2020</MenuItem>
                    <MenuItem value={3}>2021</MenuItem>
                  </Select>
                </Grid>
              </FormControl>
              <FormControl>
                <Button
                  size="medium"
                  variant="outlined"
                  className={classes.addbutton}
                >
                  Add Card
                </Button>
              </FormControl>
            </Grid>
          </Container>
        </Container>
      </React.Fragment>
    </div>
  );
}
