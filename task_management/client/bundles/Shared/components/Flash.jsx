import React from "react";
import FlashContent from "./FlashContent";
import Snackbar from "@material-ui/core/Snackbar";

const Flash = props => {
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
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <FlashContent message={message} onClose={handleClose} variant={variant} />
    </Snackbar>
  );
};

export default props => <Flash {...props} />;
