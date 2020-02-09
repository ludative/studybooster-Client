import React from "react";
import useToast from "@/hooks/useToast";

const withToast = WrappedComponent => {
  return props => {
    const [toastElement, setToast] = useToast();

    return (
      <>
        <WrappedComponent {...props} setToast={setToast} />
        {toastElement}
      </>
    );
  };
};

export default withToast;
