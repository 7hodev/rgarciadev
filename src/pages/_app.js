import React, { useState, useEffect } from 'react';
import Head from 'next/head'
/* STYLES */
import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css';

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    import('bootstrap/dist/js/bootstrap');
  }, [])

  return (
    <>
      <Head>
        <title>Rodrigo García</title>
        <meta name="description" content="Developer Junior" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/svgviewer-png-output.png" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css"></link>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
