import Card from "./card/Card";

interface postsInterface {
  id: number,
  name: string,
  img: string,
  post: string,
  like: number
}

const posts: postsInterface[] = [
  {
    id: 1,
    name: 'Vladislav',
    img: 'https://get.pxhere.com/photo/person-people-portrait-facial-expression-hairstyle-smile-emotion-portrait-photography-134689.jpg',
    post: 'https://phonoteka.org/uploads/posts/2022-01/1642965899_52-phonoteka-org-p-krasivii-fon-priroda-54.jpg',
    like: 123
  }
]

const Cards = () => {
  let post = posts.map((post:postsInterface) => <Card key={post.id} like={post.like} img={post.img} post={post.post} name={post.name} />)

  return (
    <div>
      {post}
    </div>
  )
}

export default Cards
