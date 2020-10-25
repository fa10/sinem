import * as React from 'react';
import { css } from '@emotion/core';

function Section({ children, backgroundColor = 'transparent' }) {
  return (
    <section
      css={css`
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        width: 100vw;
        position: relative;
        background-color: ${backgroundColor};
      `}
    >
      {children}
    </section>
  );
}

export { Section };
