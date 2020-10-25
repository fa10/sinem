import Head from 'next/head';
import { Global, css } from '@emotion/core';
import { Header } from '../components/header';
import { HomeSlider } from '../components/home-slider';

const GlobalStyles = css`
  @font-face {
    font-family: 'Quentin';
    font-style: normal;
    font-weight: normal;
    src: local('Quentin'), local('Quentin'), url('/fonts/quentin-webfont.woff2') format('woff2');
  }

  body {
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
  }
`;

function Home() {
  return (
    <>
      <Head>
        <title>Sinem Kupelikilinc</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Global styles={GlobalStyles} />
      <Header />
      <HomeSlider />
    </>
  );
}

export default Home;
