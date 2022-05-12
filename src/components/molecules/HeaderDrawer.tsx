import { Drawer, makeStyles, Theme } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme: Theme) => ({
  drawerContainer: {
    width: "300px",
    backgroundColor: "white",
  },
}));

interface Props {
  isOpen: boolean;
  setIsOpen: (value: React.SetStateAction<boolean>) => void;
}

const HeaderDrawer: React.FC<Props> = (props) => {
  const { isOpen, setIsOpen } = props;
  const classes = useStyles();
  return (
    <Drawer
      anchor="left"
      open={isOpen}
      onClose={() => {
        setIsOpen(false);
      }}
    >
      <div className={classes.drawerContainer}></div>
    </Drawer>
  );
};

export default HeaderDrawer;
