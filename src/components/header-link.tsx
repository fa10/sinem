import * as React from 'react';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import { css } from '@emotion/core';

type HeaderLinkProps = LinkProps & {
  children: React.ReactNode;
};

function HeaderLink({ children, href, ...props }: HeaderLinkProps) {
  const router = useRouter();
  const isActive = router.pathname.indexOf(href as string) === 0;
  return (
    <Link href={href} passHref={true} {...props}>
      <a
        css={css`
          font-family: 'Montserrat', sans-serif;
          position: relative;
          display: inline-block;
          width: 100%;
          vertical-align: middle;
          box-sizing: border-box;
          color: #fff;
          font-size: 1rem;
          height: 100%;
          padding: 0 1rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          line-height: 24px;
          text-transform: uppercase;
          text-decoration: none;
        `}
      >
        <span
          css={css`
            display: block;
            position: relative;
            top: 50%;
            transform: translateY(-50%);
          `}
        >
          <span
            css={css`
              display: inline-block;
              position: relative;
              vertical-align: top;
              transition: color 0.2s ease-out;

              ::before {
                background-color: currentColor;
                bottom: 0;
                content: '';
                height: 1px;
                left: 0;
                position: absolute;
                width: 100%;
                transform-origin: left;
                transform: ${isActive ? 'scale(1,1)' : 'scale(0,1)'};
                transition: ${isActive
                  ? 'transform .2s ease-out .1s'
                  : 'transform .1s ease-out 0s'};
              }
            `}
          >
            {children}
          </span>
        </span>
      </a>
    </Link>
  );
}

export { HeaderLink };
