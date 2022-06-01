import Link from 'next/link';
import Head from 'next/head';

import Image from 'next/image';
import styles from '../../styles/Collections.module.scss';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';




export default function PortfolioPage({ portfolio }) {

  return (
    <div className={styles.container}>

    <Head>
      <title>Ira Koval - Wedding Dress design</title>
      <meta name="description" content="Wedding dress design" />
      <link rel="icon" href="/favicon.ico" />
  <link href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative&family=Quicksand:wght@300&display=swap" rel="stylesheet" />
    </Head>

    <Header />

      <div className="container pt-5">
      <h1 className="text-center pb-5">TITLE HERE</h1>
      

      </div>
    </div>

  );
}