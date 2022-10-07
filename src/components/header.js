//react navbar component with 2 links
import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <NavLink to="/">me</NavLink>
      <NavLink to="/experiences">experiences</NavLink>
      <NavLink to="/contact">contact</NavLink>
    </header>
  );
}
