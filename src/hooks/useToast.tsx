import React, { useState, useEffect } from "react";
import Alert, { Color } from "@material-ui/lab/Alert";
import { makeStyles, createStyles } from "@material-ui/core";

export interface IToastValues {
  message: string;
  type: Color;
}

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      position: "fixed",
      top: "30px",
      left: "50%",
      transform: "translateX(-50%)"
    }
  })
);

const useToast = () => {
  const [toast, setToast] = useState<IToastValues>({
    message: "",
    type: "error"
  });
  const classes = useStyles();

  useEffect(() => {
    let interval: NodeJS.Timeout = setInterval(() => {}, 0);

    if (toast) {
      interval = setInterval(() => {
        setToast(state => ({ ...state, message: "" }));
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [toast]);

  const toastElement = toast.message ? (
    <Alert className={classes.root} severity={toast.type}>
      {toast?.message}
    </Alert>
  ) : null;

  return [toastElement, setToast];
};

export default useToast;
