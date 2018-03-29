import React from "react";

const If = props => {
  const { test, children } = props;
  return test ? children : null;
};

export default If;
