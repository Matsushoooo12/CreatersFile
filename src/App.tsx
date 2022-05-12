import React from "react";
import { makeStyles, Theme } from "@material-ui/core";
import "./App.css";
import { HeaderLayout } from "./components/templates/HeaderLayout";
import Top from "./components/pages/Top";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    paddingTop: "64px",
    [theme.breakpoints.up("sm")]: {
      paddingTop: "80px",
    },
  },
}));

const App: React.FC = () => {
  const classes = useStyles();
  return (
    <HeaderLayout>
      <div className={classes.root}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Top />} />
          </Routes>
        </BrowserRouter>
      </div>
    </HeaderLayout>
  );
};

export default App;
