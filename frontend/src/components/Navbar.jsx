import React from "react";
import { AppBar, Toolbar, styled } from "@mui/material";
import { NavLink } from "react-router-dom";

const Header = styled(AppBar)`
  background: #111111;
`;

const Tabs = styled(NavLink)`
  font-size: 20px;
  margin-right: 20px;
  color: inherit;
  text-decoration: none;
`;
export default function Navbar() {
  return (
    <div>
      <Header position="static">
        <Toolbar>
          <Tabs to="/">CRUD App</Tabs>
          <Tabs to="/all">All Users</Tabs>
          <Tabs to="/add">User</Tabs>
        </Toolbar>
      </Header>
    </div>
  );
}
