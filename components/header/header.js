import Link from 'next/link'
import Image from 'next/image';
import styles from '../../styles/Header.module.scss';


export default function Header () {
    return (
        <nav className={styles.nav}>

            <div className={styles.headerContainer}>

                <Link href="/" className={styles.logo}>
                    <a>
                        <Image alt="Ira Koval Design logo" src='/images/irakoval-logo.png' width={175} height={45} />
                    </a>
                </Link>

                <ul className={styles.navList}>
                
                    <li>
                        <Link href="/collections">
                            <a>Collections</a>
                        </Link>
                    </li>

                    <li>
                        <Link href="/where-to-buy">
                            <a>Where to buy</a>
                        </Link>
                    </li>

                    <li>                        
                        <Link href="/contact/">
                            <a>Contact</a>
                        </Link>
                    </li>
                </ul>

            </div>
           
        </nav>
    )
}