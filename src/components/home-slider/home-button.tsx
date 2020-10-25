import { css } from '@emotion/core';

function HomeButton({ children, ...props }) {
  return (
    <button
      css={css`
        font-family: inherit;
        width: auto;
        outline: 0;
        font-size: 1em;
        line-height: 1em;
        letter-spacing: 0.15em;
        font-weight: 700;
        text-transform: uppercase;
        box-sizing: border-box;
        margin: 0;
        transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out,
          border-color 0.2s ease-in-out;
        padding: 1.5em 3em;
        border: 1px solid white;
        background-color: transparent;
        color: white;
        cursor: pointer;
        margin-top: 2em;

        :hover {
          color: #0d0a0b !important;
          background-color: #fff !important;
          border-color: #fff !important;
        }
      `}
      {...props}
    >
      {children}
    </button>
  );
}

export { HomeButton };
