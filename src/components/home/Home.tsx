import styles from "./Home.module.scss"
import Cards from "../cards/Cards";

const Home = () => {
  return (
    <main className={styles.main}>
      <Cards />
    </main>
  )
}

export default Home
