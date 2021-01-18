import { css } from '@emotion/core';
import * as React from 'react';
import { HeaderLogo } from '../header-logo';
import { Section } from '../section';
import { HomeButton } from './home-button';
import { HomeH1 } from './home-h1';
import { HomeH2 } from './home-h2';

function HomeSlide() {
  return (
    <Section>
      <div
        css={css`
          height: 100vh;
          width: 100vw;
          position: relative;
          background-size: cover;
          background-position: 50% 50%;
        `}
      >
        <div
          css={css`
            position: absolute;
            height: 100%;
            width: 100%;
            top: 0;
            left: 0;
            background: #eeeae3;
            color: #936767;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
          `}
        >
          <div
            css={css`
              display: flex;
              align-items: center;
              justify-content: center;
              flex-direction: column;
            `}
          >
            <HeaderLogo />
            <HomeH2>COMING SOON.</HomeH2>
            <HomeButton disabled={true}>Services (Soon)</HomeButton>
            <HomeButton disabled={true}>Booking (Soon)</HomeButton>
          </div>
        </div>
      </div>
    </Section>
  );
}

export { HomeSlide };
