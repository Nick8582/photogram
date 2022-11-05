import logo from '../../assets/logo.png'
import styles from './Header.module.scss'
import Search from "./search/Search";

const Header = () => {
  return (
    <header className={styles.header}>
      <a href='/' className={styles.logoHref}>
        <img src={logo} alt="Логотип сайта" className={styles.logo} />
      </a>
      <Search />
    </header>
  )
}
export default Header
