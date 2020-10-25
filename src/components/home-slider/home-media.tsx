import { css } from '@emotion/core';
import * as React from 'react';
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
          background-image: url(/home1.jpg);
          backdrop-filter: grayscale(100%);
        `}
      >
        <div
          css={css`
            position: absolute;
            height: 100%;
            width: 100%;
            top: 0;
            left: 0;
            background: rgb(13 10 11 / 85%);
            color: white;
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
            <HomeH2>Sinem Küpelikilinc</HomeH2>
            <HomeButton disabled={true}>Services & Prices (Soon)</HomeButton>
            <HomeButton disabled={true}>Booking Request (Soon)</HomeButton>
          </div>
        </div>
      </div>
    </Section>
  );
}

export { HomeSlide };
