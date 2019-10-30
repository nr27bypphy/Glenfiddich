import React from "react";
import FlashContent from "./FlashContent";
import Snackbar from "@material-ui/core/Snackbar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({}));

function Flash(props) {
  const classes = useStyles();
  const { initialState, message, variant } = props;
  const [open, setOpen] = React.useState(initialState);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Snackbar
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left"
      }}
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
    >
      <FlashContent message={message} onClose={handleClose} variant={variant} />
    </Snackbar>
  );
}

export default props => <Flash {...props} />;
