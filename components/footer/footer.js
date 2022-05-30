import styles from '../../styles/Footer.module.scss'


export default function Header () {
    return (
        <footer className={styles.footer}>
            Created and Designed by
            <a
                href="https://vertixmedia.com/"
                target="_blank"
                rel="noopener noreferrer"
            >
                Website Design Agency
            </a>
            - Vertix Media

        </footer>
    )
}