import { css } from '@emotion/core';

function HomeH1({ children }) {
  return (
    <h1
      css={css`
        font-family: 'Montserrat', sans-serif;
        letter-spacing: 0.15em;
        font-weight: 700;
        text-transform: uppercase;
        color: #bf9484;
        font-size: 6em;
        margin: 0;
        line-height: 1;
        text-align: center;
      `}
    >
      {children}
    </h1>
  );
}

export { HomeH1 };
