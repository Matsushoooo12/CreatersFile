import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillHome } from "react-icons/ai";
import { FaBuilding } from "react-icons/fa";

import Logo from "../../images/logo.png";
import HeaderDrawer from "../molecules/HeaderDrawer";
import SignupModal from "../molecules/SignupModal";
import LoginModal from "../molecules/LoginModal";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: "64px",
    backgroundColor: "white",
    boxShadow: "3px 0px 6px #000",
    position: "fixed",
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      height: "80px",
    },
  },
  headerContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "auto",
    height: "100%",
  },
  headerLeftContainer: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    marginLeft: "20px",
    [theme.breakpoints.up("sm")]: {
      marginLeft: "40px",
    },
    [theme.breakpoints.up("md")]: {
      marginLeft: "120px",
    },
  },
  Logo: {
    width: "74px",
    [theme.breakpoints.up("sm")]: {
      width: "100px",
    },
  },
  hamburgerIcon: {
    fontSize: "24px",
    color: "#40346F",
    marginRight: "8px",
    [theme.breakpoints.up("sm")]: {
      fontSize: "32px",
      marginRight: "16px",
    },
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  headerRightContainer: {
    display: "flex",
    alignItems: "center",
    marginRight: "20px",
    [theme.breakpoints.up("sm")]: {
      marginRight: "40px",
    },
    [theme.breakpoints.up("md")]: {
      marginRight: "120px",
    },
  },
  signupButton: {
    height: "30px",
    fontSize: "9px",
    backgroundColor: "#999999",
    color: "#fff",
    marginRight: "4px",
    "&:hover": {
      cursor: "pointer",
      opacity: 0.8,
      backgroundColor: "#999999",
    },
  },
  loginButton: {
    height: "30px",
    fontSize: "9px",
    backgroundColor: "#40346F",
    color: "#fff",
    "&:hover": {
      cursor: "pointer",
      opacity: 0.8,
      backgroundColor: "#40346F",
    },
  },
  headerMenuContainer: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      alignItems: "center",
      marginLeft: "80px",
      color: "#40346F",
    },
  },
  headerMenuItem: {
    marginRight: "32px",
    height: "100%",
    "&:hover": {
      borderBottom: "3px solid #40346F",
      cursor: "pointer",
    },
  },
  headerMenuIcon: {
    fontSize: "30px",
    width: "100%",
  },
  headerMenuText: {
    fontSize: "12px",
    fontWeight: "bold",
    width: "100%",
  },
}));

export const Header: React.FC = () => {
  const classes = useStyles();
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const [isModalOpen, setIsModalOpen] = React.useState({
    open: false,
    content: "",
  });

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleSignupModalOpen = () => {
    setIsModalOpen({
      open: true,
      content: "signup",
    });
  };

  const handleLoginModalOpen = () => {
    setIsModalOpen({
      open: true,
      content: "login",
    });
  };

  const handleModalClose = () => {
    setIsModalOpen({
      open: false,
      content: "",
    });
  };

  return (
    <>
      <div className={classes.root}>
        <div className={classes.headerContainer}>
          <div className={classes.headerLeftContainer}>
            <GiHamburgerMenu
              className={classes.hamburgerIcon}
              onClick={toggleDrawer}
            />
            <img className={classes.Logo} src={Logo} alt="logo" />
            <div className={classes.headerMenuContainer}>
              <div className={classes.headerMenuItem}>
                <AiFillHome className={classes.headerMenuIcon} />
                <p className={classes.headerMenuText}>ホーム</p>
              </div>
              <div className={classes.headerMenuItem}>
                <FaBuilding className={classes.headerMenuIcon} />
                <p className={classes.headerMenuText}>CoCについて</p>
              </div>
            </div>
          </div>
          <div className={classes.headerRightContainer}>
            <Button
              variant="contained"
              className={classes.signupButton}
              onClick={handleSignupModalOpen}
            >
              新規登録
            </Button>
            <Button
              variant="contained"
              className={classes.loginButton}
              onClick={handleLoginModalOpen}
            >
              ログイン
            </Button>
          </div>
        </div>
      </div>
      <HeaderDrawer isOpen={isDrawerOpen} setIsOpen={setIsDrawerOpen} />
      {isModalOpen.content === "signup" ? (
        <SignupModal
          isModalOpen={isModalOpen.open}
          handleModalClose={handleModalClose}
        />
      ) : (
        <LoginModal
          isModalOpen={isModalOpen.open}
          handleModalClose={handleModalClose}
        />
      )}
    </>
  );
};
