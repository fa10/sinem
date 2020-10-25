import * as React from 'react';
import { css } from '@emotion/core';
import AwesomeSlider from 'react-awesome-slider';
import { HomeSlide } from './home-media';

export const media = [
  {
    children: <HomeSlide />,
  },
];

function HomeSlider() {
  return (
    <div
      css={css`
        position: relative;
        margin-top: -90px;
        z-index: 100;
      `}
    >
      <AwesomeSlider
        media={media}
        bullets={false}
        buttons={false}
        css={css`
          height: 100vh !important;
        `}
      />
    </div>
  );
}

export { HomeSlider };
