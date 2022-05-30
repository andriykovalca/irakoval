import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Collections.module.scss';
import Link from 'next/link';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import { getPortfolios, getPosts } from '../utils/wordpress';
import Portfolio from '../components/portfolio/portfolio';

export default function Collections({portfolios, posts}) {

	const jsxPortfolios = portfolios.map((portfolio) => {
		const featuredMedia = portfolio['_embedded']['wp:featuredmedia'][0];
		return <Portfolio portfolio={portfolio} featuredMedia={featuredMedia} key={portfolio.id} />;
	});

  return (
    <div className={styles.container}>
      	<Head>
        	<title>Ira Koval - Wedding Dress design</title>
        	<meta name="description" content="Wedding dress design" />
        	<link rel="icon" href="/favicon.ico" />
			<link href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative&family=Quicksand:wght@300&display=swap" rel="stylesheet" />
      	</Head>

		<Header />
		<main className={styles.main}>

		<h1>Our Collections</h1>

		<p>FILTERS HERE</p>
			
		<div className={styles.collectionItems}>
			{jsxPortfolios}
	  	</div>
		</main>

		<Footer />

    </div>
  )
}

export async function getStaticProps({ params }) {
	const posts = await getPosts();
	const portfolios = await getPortfolios();
	// const media = await getMedia();
  
	return {
	  props: {
		posts,
		portfolios,
	  },
	  revalidate: 10, // In seconds
	};
  }