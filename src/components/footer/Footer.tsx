import {NavLink} from "react-router-dom";
import {GoArchive, GoPlus, GoPerson} from 'react-icons/go'
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <nav className={styles.nav}>
        <NavLink className={({isActive}) => (isActive ? 'activeLink' : 'link')} to='.'>
          <GoArchive/>
        </NavLink>
        <NavLink className={({isActive}) => (isActive ? 'activeLink' : 'link')} to='add-photo'>
          <GoPlus/>
        </NavLink>
        <NavLink className={({isActive}) => (isActive ? 'activeLink' : 'link')} to='account'>
          <GoPerson/>
        </NavLink>
      </nav>
    </footer>
  )
}

export default Footer
