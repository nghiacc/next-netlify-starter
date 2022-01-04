import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        Made with <img src="/Lotus_Icon.png" alt="Lotus Logo" className={styles.logo} /> for you
      </footer>
    </>
  )
}
