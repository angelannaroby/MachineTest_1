import { makeStyles } from "@material-ui/core/styles";
import { Hidden } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    root: {
      minHeight: "100vh",
      backgroundColor: "#F5F5F5",
    },
    container: {
      paddingBottom: theme.spacing(7),
      paddingLeft: theme.spacing(8),
      [theme.breakpoints.down("sm")]: {
        paddingLeft: theme.spacing(1),
      },
    },
    main: {
      paddingTop: theme.spacing(4),
      fontWeight: "bolder",
      color: "#548089",
      [theme.breakpoints.down("sm")]: {
        paddingTop: theme.spacing(2),
      },
    },
    sub: {
      paddingTop: theme.spacing(1),
      color: "#548089",
    },
    subCard: {
      paddingTop: theme.spacing(3),
      color: "#548089",
      fontWeight: "bold",
    },
    formControl: {
      margin: theme.spacing(1),
      width: "100%",
      backgroundColor: "#D0D0D0",
    },
    expiryMSelect: {
      // marginLeft: "10px",
      minWidth: "100px",
      backgroundColor: "#D0D0D0",
      height: "40px",
    },
    expiryYrSelect: {
      marginLeft: "10px",
      minWidth: "150px",
      backgroundColor: "#D0D0D0",
      height: "40px",
    },
    margin: {
      margin: theme.spacing(1),
    },
    textfield: {
      width: "100%",
      backgroundColor: "#fff",
    },
    editbutton: {
      width: "70%",
      minHeight: "55px",
      backgroundColor: "#fff",
      color: "#548089",
      fontWeight: "bold",
    },
    savebutton: {
      width: "32%",
      backgroundColor: "#EF9C66",
      color: "#fff",
      fontWeight: "bold",
      [theme.breakpoints.down("sm")]: {
        width: "70%",
      },
      [theme.breakpoints.between('md','md')]: {
        width: "50%",
      },
    },
    addbutton: {
      backgroundColor: "#EF9C66",
      color: "#fff",
      fontWeight: "bold",
      margin: "10px",
      marginTop: "23px",
    },
    gridBlock: {
      paddingBottom: "15px",
    },
    newCardGrid: {
      paddingLeft: "1px",
      paddingRight: "1px",
    },
    space: {
      paddingRight: "10px",
    },
    paper: {
      maxWidth: "750px",
      minHeight: "75px",
      marginLeft: "30px",
    },
    savedCard: {
      padding: "20px",
    },
    avatar: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
    overlay: {
      position: "absolute",
      top: "20px",
      left: "20px",
      color: "black",
      backgroundColor: "white",
    },
    changePhoto: {
      // marginLeft: "250px",
      position: "relative",
      textAlign: "center",
    },
    centered: {
      position: "absolute",
      top: "42%",
      left: "10%",
    },
    typography: {
      padding: theme.spacing(2),
    },
    card: {
      backgroundColor: "#F5F5F5",
    },
    dot: {
      color: "#00FFFF" 
    },
    closeIcon: {
      color: "#EF9C66",
      paddingLeft: "70px"
    }
  }));