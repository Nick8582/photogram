import {BiSearch} from 'react-icons/bi'
import {FC, useState} from "react";
import styles from './Search.module.scss'

const Search: FC = () => {
  const [state, setState] = useState<boolean>(false)

  const handleClick = (event: { preventDefault: () => void; }) => {
    event.preventDefault()
    setState(current => {
      return !current;
    });
  };

  return (
    <div className={styles.search}>
      <button className={styles.buttonSearch} onClick={handleClick}>
        <BiSearch className={styles.icon} />
      </button>
      <input style={{display: state ? 'block' : ''}} type='text' placeholder="Что будем искать?" className={styles.input} />
    </div>
  )
}

export default Search
