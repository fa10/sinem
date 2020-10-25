import * as React from 'react';
import { LinkProps } from 'next/link';
import { css } from '@emotion/core';
import { HeaderLink } from './header-link';

type HeaderMenuItemProps = LinkProps & {
  children: React.ReactNode;
};

function HeaderMenuItem({ href, children }: HeaderMenuItemProps) {
  return (
    <li
      css={css`
        display: inline-block;
        margin: 0;
        padding: 0;
        position: relative;
        box-sizing: border-box;
        height: 100%;
      `}
    >
      <HeaderLink href={href}>{children}</HeaderLink>
    </li>
  );
}

export { HeaderMenuItem };
