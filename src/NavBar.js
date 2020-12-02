import React from "react";
import { Link } from "@reach/router";
import { css } from "@emotion/core";

const NavBar = () => (
  <header
    css={css`
      background-color: pink;
      padding: 10px;
    `}
  >
    <Link to="/">Adopt Me!</Link>
    <span role="img" aria-label="logo">
      🐾
    </span>
  </header>
);

export default NavBar;
