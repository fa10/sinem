import React from 'react';
import { css } from '@emotion/core';
import { HeaderMenuItem } from './header-menuitem';

function HeaderNav() {
  return (
    <nav
      css={css`
        position: relative;
        display: inline-block;
        vertical-align: middle;
        height: 100%;
        width: auto;
      `}
    >
      <ul
        css={css`
          position: relative;
          display: inline-block;
          width: 100%;
          vertical-align: middle;
          height: 100%;
          margin: 0;
        `}
      >
        <HeaderMenuItem href="/">Home</HeaderMenuItem>
        {/* <HeaderMenuItem href="/about">About</HeaderMenuItem> */}
      </ul>
    </nav>
  );
}

export { HeaderNav };
