import React from "react";
import { Navbar } from "../Navbar";

interface Layout {
  children: JSX.Element;
}
 
export const Layout = (props: Layout) => (
  <React.Fragment>
    <Navbar />
    {props.children}
  </React.Fragment>
);
