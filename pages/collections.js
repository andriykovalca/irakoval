import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Collections.module.scss';
import Link from 'next/link';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import Portfolio from '../components/portfolio/portfolio';
import {getPortfolios} from "./api/portfolios";
import React, { useState } from 'react';
import { slice, concat, } from 'lodash';

const LENGTH = 118;
const LIMIT = 12;

export default function Collections({portfolios}) {


	

	const [showMore,setShowMore] = useState(true);
	const [ports,setPorts] = useState(slice(portfolios, 0, LIMIT));
	const [index,setIndex] = useState(LIMIT);

	// const jsxPortfolios = ports.map((port) => {
	// 	const featuredMedia = port['_embedded']['wp:featuredmedia'][0];
	// 	return <img src={featuredMedia['media_details'].sizes.medium['source_url']} />;
	// });

	const loadMore = () =>{
		const newIndex = index + LIMIT;
		const newShowMore = newIndex < (LENGTH - 1);
		const newPorts = concat(ports, slice(portfolios, index, newIndex));
		setIndex(newIndex);
		setPorts(newPorts);
		setShowMore(newShowMore);
	  }

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
			
		<div className={styles.collectionItems}>
			
			{ports.map((port) => (
				<div className={styles.portfolioCard} key={port.node.id}>

					<Link href={`/portfolio/${port.node.slug}`}>
						<a style={{color:'black'}}>
							
								<img style={{width: '405', height: '480px'}} src={port.node.featuredImage.node.mediaItemUrl} />
								
							
						</a>
					</Link>
					<Link href={`/portfolio/${port.node.slug}`}>
						<a style={{color:'black'}}>
							
							{port.node.title}								
							
						</a>
					</Link>
					
				</div>
			))}
			
	  	</div>
		  {showMore && <button className={styles.loadMore} onClick={loadMore}> Load More </button>}
		</main>

		<Footer />

    </div>
  )
}

export async function getServerSideProps(ctx){
	let portfolios = await getPortfolios();
	return {
	  props:{
		portfolios
	  }
	}
  }