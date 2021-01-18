import { css } from '@styled-system/css';

function HomeH2({ children, ...props }) {
  return (
    <h2
      css={css({
        fontFamily: 'inherit',
        fontWeight: 400,
        textTransform: 'uppercase',
        color: 'inherit',
        fontSize: ['3em', '4em'],
        margin: 0,
        textAlign: 'center',
        letterSpacing: '0.05rem',
        marginBottom: 'calc(16px * 2)',
        ...props,
      })}
    >
      {children}
    </h2>
  );
}

export { HomeH2 };
