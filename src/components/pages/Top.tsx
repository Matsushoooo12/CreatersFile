import React from "react";
import { Button, makeStyles, Theme } from "@material-ui/core";
import FirstViewImage from "../../images/Website Creator-amico.svg";
import Logo from "../../images/logo.png";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "100%",
    paddingTop: "56px",
  },
  logo: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
      width: "120px",
    },
  },
  firstViewContainer: {
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  firstViewImageContainer: {
    margin: "auto",
    width: "320px",
    [theme.breakpoints.up("sm")]: {
      width: "387px",
      margin: 0,
    },
  },
  firstViewImage: {
    [theme.breakpoints.up("sm")]: {
      width: "387px",
    },
  },
  firstViewTitle: {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "12px",
    [theme.breakpoints.up("sm")]: {
      fontSize: "24px",
      marginBottom: "16px",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "36px",
      marginBottom: "24px",
    },
  },
  firstViewText: {
    fontSize: "10px",
    textAlign: "left",
    marginBottom: "12px",
    fontWeight: "bold",
    [theme.breakpoints.up("sm")]: {
      fontSize: "14px",
      marginBottom: "24px",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "16px",
      marginBottom: "32px",
    },
  },
  firstViewStartButton: {
    backgroundColor: "#40346F",
    color: "white",
    fontSize: "9px",
    marginBottom: "16px",
    "&:hover": {
      backgroundColor: "#40346F",
      cursor: "pointer",
      opacity: 0.8,
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "16px",
    },
  },
  firstViewTitleContainer: {
    margin: "auto",
    width: "324px",
    color: "#40346F",
    [theme.breakpoints.up("sm")]: {
      width: "324px",
    },
    [theme.breakpoints.up("md")]: {
      width: "650px",
    },
  },
}));

const Top: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.firstViewContainer}>
        <div>
          <img className={classes.logo} src={Logo} alt="logo" />
          <div className={classes.firstViewTitleContainer}>
            <h1 className={classes.firstViewTitle}>
              創作活動の仲間集めマッチングサービス
            </h1>
            <p className={classes.firstViewText}>
              どこでも誰とでも、繋がりたいクリエイターと１対１で繋がれる
            </p>
            <Button
              className={classes.firstViewStartButton}
              variant="contained"
            >
              はじめる
            </Button>
          </div>
        </div>
        <div className={classes.firstViewImageContainer}>
          <img
            className={classes.firstViewImage}
            src={FirstViewImage}
            alt="firstView"
          />
        </div>
      </div>
    </div>
  );
};

export default Top;
