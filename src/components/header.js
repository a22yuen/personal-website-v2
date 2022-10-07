//react navbar component with 2 links
import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"

export default function Header() {
  return (
    <header
      css={css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: ${rhythm(1)} ${rhythm(3 / 4)};
      `}
    >
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </header>
  )
}
