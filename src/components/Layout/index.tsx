import React from "react";
import { Navbar } from "../Navbar";

interface Layout {
  children: JSX.Element
}

export function Layout(props: Layout) {
  return (
    <React.Fragment>
      <Navbar />
      {props.children}
    </React.Fragment>
  );
}
