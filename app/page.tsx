import styles from './page.module.css'
import Header from "@/app/header";
import Footer from "@/app/footer";
import Logo from "@/app/logo";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Logo />
      <Footer/>
    </main>
  )
}
