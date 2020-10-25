import * as React from 'react';
import { css } from '@emotion/core';
import { HomeSlide } from './home-media';

function HomeSlider() {
  return (
    <div
      css={css`
        position: relative;
        margin-top: -90px;
        z-index: 100;
      `}
    >
      <HomeSlide />
    </div>
  );
}

export { HomeSlider };
