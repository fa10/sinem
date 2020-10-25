import { css } from '@emotion/core';
import * as React from 'react';
import { HeaderLogo } from './header-logo';
import { HeaderNav } from './header-nav';

function Header() {
  const renderLeft = () => (
    <div
      css={css`
        float: left;
        height: 100%;
        position: relative;
        z-index: 2;
      `}
    >
      <HeaderLogo />
    </div>
  );

  const renderCenter = () => (
    <div
      css={css`
        height: 100%;
        left: 0;
        position: absolute;
        text-align: center;
        width: 100%;
        z-index: 1;
      `}
    ></div>
  );

  const renderRight = () => (
    <div
      css={css`
        float: right;
        height: 100%;
        position: relative;
        text-align: right;
        z-index: 2;
      `}
    >
      <HeaderNav />
    </div>
  );

  return (
    <header
      css={css`
        display: inline-block;
        position: relative;
        margin: 0;
        padding: 0;
        z-index: 110;
        width: 100%;
        vertical-align: middle;
        box-sizing: border-box;
      `}
    >
      <div
        css={css`
          position: relative;
          height: 90px;
          background-color: transparent;
          box-sizing: border-box;
          color: #fff !important;
        `}
      >
        <div
          css={css`
            box-sizing: border-box;
            height: 100%;
            padding: 0 40px;
            position: relative;
            width: 100%;
          `}
        >
          {renderLeft()}
          {renderCenter()}
          {renderRight()}
        </div>
      </div>
    </header>
  );
}

export { Header };
