import { css } from '@styled-system/css';

function HomeH1({ children, fontSize = ['4em', '6em'] }) {
  return (
    <h1
      css={css({
        fontFamily: "'Montserrat', sans-serif",
        letterSpacing: '0.15em',
        fontWeight: '700',
        textTransform: 'uppercase',
        color: #936767,
        fontSize,
        margin: 0,
        lineHeight: 1.15,
        textAlign: 'center',
      })}
    >
      {children}
    </h1>
  );
}

export { HomeH1 };
