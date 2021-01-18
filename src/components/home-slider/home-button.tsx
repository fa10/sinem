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
        border: 2px solid #936767;
        background-color: #936767;
        color: #eeeae3;
        cursor: pointer;
        margin-top: 1rem;

        :hover {
          color: #eeeae3 !important;
          background-color: #936767 !important;
          border-color: #936767 !important;
        }
      `}
      {...props}
    >
      {children}
    </button>
  );
}

export { HomeButton };
