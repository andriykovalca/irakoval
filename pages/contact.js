import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Contact.module.scss';
import Link from 'next/link';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';




export default function Contact({portfolios}) {

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

		<h1>Contact</h1>

		<p>CONTACTS HERE</p>		
		

		</main>

		<Footer />

    </div>
  )
}