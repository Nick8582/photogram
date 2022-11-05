import { Outlet } from 'react-router-dom';
import styles from './MainLayouts.module.scss'
import Header from "../components/header/Header.js";
import Footer from "../components/footer/Footer.js";

const MainLayouts = () => {
  return (
    <div className={styles.content}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default MainLayouts
