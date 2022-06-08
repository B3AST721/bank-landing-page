import styles from '/home/jaheel/bank-landing-page/pages/components/Header.module.css'
import Logo from '/home/jaheel/bank-landing-page/public/images/logo.svg';
import Image from 'next/image';

function Header() {
  return (
    <header className={styles.header}>
      <Image src={Logo} />
      <ul className={styles.list}>
        <a>Home</a>
        <a>About</a>
        <a>Contact</a>
        <a>Blog</a>
        <a>Careers</a>
      </ul>
      <button className={styles.invite}>Request Invite</button>
    </header>
  )
}

export default Header