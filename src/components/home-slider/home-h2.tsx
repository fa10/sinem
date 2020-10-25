import { css } from '@styled-system/css';

function HomeH2({ children, ...props }) {
  return (
    <h2
      css={css({
        fontFamily: 'Quentin',
        fontWeight: 400,
        textTransform: 'capitalize',
        color: 'white',
        fontSize: ['3em', '4em'],
        margin: 0,
        textAlign: 'center',
        ...props,
      })}
    >
      {children}
    </h2>
  );
}

export { HomeH2 };
