
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import styles from "./layout.module.css"

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className={styles.main}>
        {children}
      </main>
      
      <footer>
        <Footer /> 
      </footer>
    </>
  );
}