import {AiOutlineLike} from 'react-icons/ai'
import styles from './Card.module.scss'


const Card = ({name, img, post, like}: {name: string, img: string, post: string, like: number}) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img className={styles.img} src={img} alt={name}/>
        <h3 className={styles.name}>{name}</h3>
      </header>
      <main className={styles.main}>
        <img className={styles.post} src={post} alt={`Автор поста: ${name} url: ${post}`} />
      </main>
      <footer className={styles.footer}>
        <div className={styles.likes}>
          <AiOutlineLike className={styles.like} />
          {like}
        </div>
        <div>

        </div>
      </footer>
    </div>
  )
}
export default Card
