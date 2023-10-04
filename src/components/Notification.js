import React from "react";
import { Alert, AlertTitle } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../store/ui-slice";

export default function Notification({ type, message }) {
    const dispatch = useDispatch();
  const notification = useSelector((state) => state.ui.notification);
  const handleClose = () => {
    dispatch(uiActions.showNotification({
        open:false
    }))
  }
  return (
    <div>
      {notification.open && (
        <Alert severity={type} onClose={handleClose}>
          <AlertTitle>Success</AlertTitle>
          {message}
        </Alert>
      )}
    </div>
  );
}
