import React from "react";

const Unless = props => {
  const { test, children } = props;
  return test ? null : children;
};

export default Unless;
