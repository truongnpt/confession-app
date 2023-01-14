import React from 'react';
import Head from 'next/head';
import HomePage from './homepage/index';

export default function Home() {

  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <HomePage />
    </>
  );
}

