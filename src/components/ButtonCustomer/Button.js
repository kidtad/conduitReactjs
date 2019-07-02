import React from "react";
import Button from "@material-ui/core/Button";

function ButtonCustomer(props) {
  const { style, text } = props;
  return (
    <Button style={style} type="submit">
      {text}
    </Button>
  );
}

export default ButtonCustomer;
