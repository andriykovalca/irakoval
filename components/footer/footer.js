import styles from '../../styles/Footer.module.scss'


export default function Header () {
    return (
        <footer className={styles.footer}>
            Made with ❤️ by
            <a
                href="https://andriykoval.ca/"
                target="_blank"
                rel="noopener noreferrer"
            >
                 Andriy Koval
            </a>

        </footer>
    )
}