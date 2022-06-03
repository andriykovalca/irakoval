import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/WhereToBuy.module.scss';
import Link from 'next/link';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import {getStores} from "./api/stores";

export default function WhereToBuy({stores}) {


  return (
    <div className={styles.container}>
      	<Head>
        	<title>Ira Koval - Wedding Dress design</title>
        	<meta name="description" content="Wedding dress design" />
        	<link rel="icon" href="/favicon.ico" />
			<link href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative&family=Montserrat:wght@300;600&family=Quicksand:wght@300&display=swap" rel="stylesheet" />
      	</Head>

		<Header />
		<main className={styles.main}>

		<h1>Where to buy</h1>

		<div className={styles.storeContainer}>
			{stores.map((store) => (
				<div className={styles.storeCard} key={store.node.storeId}>
							
					<h3 className={styles.storeHeading}>{store.node.title}</h3>
					

					<span dangerouslySetInnerHTML={{__html: store.node.content}}></span>

				
				</div>
			))}
		</div>




		</main>

		<Footer />

    </div>
  )
}

export async function getServerSideProps(ctx){
	let stores = await getStores();
	return {
	  props:{
		stores
	  }
	}
}