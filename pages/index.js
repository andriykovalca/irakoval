import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';
import Link from 'next/link';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
// import RoomIcon from '@mui/icons-material/Room';
// import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>

export default function Home() {
	const defaultProps = {
		center: {
		  lat: 10.99835602,
		  lng: 77.01502627
		},
		zoom: 11
	  };
  return (
    <div className={styles.container}>
      	<Head>
        	<title>Ira Koval - Wedding Dress design</title>
        	<meta name="description" content="Wedding dress design" />
        	<link rel="icon" href="/favicon.ico" />
			<link href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative&family=Quicksand:wght@300&display=swap" rel="stylesheet" />
      	</Head>

      <main className={styles.main}>

	  <Header />
        
        <section className={styles.hero}>
			<Image 
				className={styles.herobg}
				src="/images/hero-bg.jpg"
				alt="Ira Koval Design"
				layout="fill"
				objectFit="cover"
				objectPosition="top"
			/>
          	<div className={styles.cta}>
            	<h1>Ira Koval 2022 Collection</h1>
            	<Link href="/collections/2022">
              		<a>View</a>
            	</Link>
			</div>
        </section>

        <section className={styles.categories}>
          	<div className='container'>
            <h2>Our dresses</h2>
            <p>A wide range of designs that combine delicacy, romanticism and elegance.</p>
				<div className={styles.categoryItems}>
					<Link href="/collections/" >
						<a>
							<div className={styles.categoryItem}>
								<Image 
									className={styles.categoryBg}
									src="/images/soft.jpg"
									alt="Ira Koval Design"
									width="400px"
									height="286px"
								/>
								<div className={styles.titleWindow}>
									<h3 className={styles.title}>Soft dresses</h3>
								</div>
								
							</div>
						</a>
					</Link>
					<Link href="/collections/">
						<a>
							<div className={styles.categoryItem}>
								<Image 
									className={styles.categoryBg}
									src="/images/modern.jpg"
									alt="Ira Koval Design"
									width="400px"
									height="286px"
								/>
								<div className={styles.titleWindow}>
									<h3 className={styles.title}>Modern dresses</h3>
								</div>
							</div>
						</a>
					</Link>
					<Link href="/collections/">
						<a>
							<div className={styles.categoryItem}>
								<Image 
									className={styles.categoryBg}
									src="/images/classic.jpg"
									alt="Ira Koval Design"
									width="400px"
									height="286px"
								/>
								<div className={styles.titleWindow}>
									<h3 className={styles.title}>Classic dresses</h3>
								</div>
							</div>
						</a>
				</Link>
				</div>
          	</div>
        </section>

		<section className={styles.featuredQuote}>
			<div className={styles.dimmer}></div>
			<div className={styles.container}>
				<h2>Ira Koval Design</h2>
				<p>Our philosophy is to make everything possible in what we do. That is why we devote ourselves entirely to our work, which is our greatest passion</p>
			</div>
		</section>

		<section className={styles.contacts}>
			<div className={styles.container}>
				<div className={styles.col}>
					<div className={styles.contactDetails}>
						<div className={styles.dimmer}></div>
						<div className={styles.text}>
							<div className={styles.contact}>
								<span className={styles.eyebrow}>Email</span>
								<span className={styles.contact}>contact@irakoval.com</span>
							</div>
							<div className={styles.contact}>
								<span className={styles.eyebrow}>Phone</span>
								<span className={styles.contact}>+38 063 2288 955</span>
							</div>
							<div className={styles.contact}>
								<span className={styles.eyebrow}>For individual orders</span>
								<span className={styles.contact}>+38 097 4717 423</span>
							</div>
						</div>
					</div>
					
				</div>
				
				<div className={styles.col}>
					<div className={styles.map}>
						
					<h2>MAP</h2>

					</div>
				</div>
			</div>
		</section>

      </main>

      <Footer />
	  
    </div>
  )
}