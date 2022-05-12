import { Backdrop, makeStyles, Modal, Theme } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme: Theme) => ({
  modalContainer: {
    width: "300px",
    height: "400px",
    backgroundColor: "white",
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    margin: "auto",
  },
}));

interface Props {
  isModalOpen: boolean;
  handleModalClose: () => void;
}

const LoginModal: React.FC<Props> = (props) => {
  const { isModalOpen, handleModalClose } = props;
  const classes = useStyles();
  return (
    <Modal
      open={isModalOpen}
      onClose={handleModalClose}
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <div className={classes.modalContainer}>ログイン</div>
    </Modal>
  );
};

export default LoginModal;
