import 'tailwindcss/tailwind.css'
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
    <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@600&family=IBM+Plex+Sans:wght@400;600&display=swap" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@600&family=IBM+Plex+Sans:wght@400;600&family=Source+Sans+Pro:wght@400;600&display=swap" rel="stylesheet"/>
    </Head>
  <Component {...pageProps} />
  </>
  );
}

export default MyApp;
