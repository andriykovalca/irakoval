import Link from 'next/link';
import Head from 'next/head';

import Image from 'next/image';
import styles from '../../styles/Collections.module.scss';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';



import { getPortfolio, getSlugs } from '../../utils/wordpress';

export default function PortfolioPage({ portfolio }) {
  const featuredMedia = portfolio['_embedded']['wp:featuredmedia'][0];
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
      <h1 className="text-center pb-5">{portfolio.title.rendered}</h1>
      
      <Image
        src={featuredMedia['media_details'].sizes.full['source_url']}
        width={580}
        height={680}
        alt={featuredMedia['alt_text']}
        className="card-img-top"
      />

      </div>
    </div>

  );
}

//hey Next, these are the possible slugs
export async function getStaticPaths() {
  const paths = await getSlugs('portfolio');

  return {
    paths,
    //this option below renders in the server (at request time) pages that were not rendered at build time
    //e.g when a new portfolio is added to the app
    fallback: 'blocking',
  };
}

//access the router, get the id, and get the data for that portfolio
export async function getStaticProps({ params }) {
  const portfolio = await getPortfolio(params.slug);

  return {
    props: {
      portfolio,
    },
    revalidate: 10, // In seconds
  };
}