"use client";

import { FunctionComponent, useEffect } from "react";

const ScrollTop: FunctionComponent = () => {
  useEffect(() => {
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: "auto",
    });
  }, []);
  return <></>;
};

export default ScrollTop;
