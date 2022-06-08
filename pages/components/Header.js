import styles from '/home/jaheel/bank-landing-page/pages/components/Header.module.css'
import Logo from '/home/jaheel/bank-landing-page/public/images/logo.svg';
import Image from 'next/image';

function Header() {
  return (
    <header className={styles.header}>
      <Image className={styles.logo} src={Logo} />
      <ul className={styles.list}>
        <a className={styles.navlink}>Home</a>
        <a className={styles.navlink}>About</a>
        <a className={styles.navlink}>Contact</a>
        <a className={styles.navlink}>Blog</a>
        <a className={styles.navlink}>Careers</a>
      </ul>
      <button className={styles.invite}>Request Invite</button>
    </header>
  )
}

export default Header