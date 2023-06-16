import styles from './page.module.css'
import Header from "@/app/header";
import Footer from "@/app/footer";
import LogoCounter from "@/app/does-work-children-inside-client";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <LogoCounter/>
      <Footer/>
    </main>
  )
}
