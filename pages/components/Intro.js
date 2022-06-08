import styles from '/home/jaheel/bank-landing-page/pages/components/Intro.module.css';
import IntroBackground from '/home/jaheel/bank-landing-page/public/images/bg-intro-desktop.svg';
import Image from 'next/image';

function Intro() {
  return (
    <div className={styles.intro}>
      <div className={styles.text}>
         <h1 className={styles.introbigtext}>Next generation <br /> digital banking</h1>
         <p className={styles.introsmalltext}>Take your financial life online. Your Easy bank account<br />will be a one-stop-shop for spending, saving,<br />budgeting, investing, and much more.</p>
         <button className={styles.invite}>Request Invite</button>
      </div>
      <div className={styles.background}>
         <Image alt='' src={IntroBackground} />
      </div>
    </div>
  )
}

export default Intro