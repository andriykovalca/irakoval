import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Contact.module.scss';
import Link from 'next/link';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import MapIcon from '@mui/icons-material/Map';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';




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

		<section className={styles.hero}>
			<Image 
				className={styles.herobg}
				src="/images/contact-wedding-black-white.jpg"
				alt="Ira Koval Design"
				layout="fill"
				objectFit="cover"
				objectPosition="center"
			/>
		  <div className={styles.contacts}>
			<h1>Contact</h1>
			<div className={styles.contactDetails}>
				<div className={styles.detail}>
					<MapIcon />
					<p>Heroiv upa street, <br />Lviv, Ukraine</p>
				</div>

				<div className={styles.detail}>
					<LocalPhoneIcon />
					<p>+38 063 2288 955 <br /> +38 097 4717 423</p>
				</div>

				<div className={styles.detail}>
					<MapIcon />
					<p>contact@irakoval.com</p>
				</div>
			</div>
		</div>
	</section>	
		

		</main>

		<Footer />

    </div>
  )
}