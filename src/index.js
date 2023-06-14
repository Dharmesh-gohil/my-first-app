import React from 'react'
import ReactDom from 'react-dom/client'
import './index.css'

function Booklist() {
  return (
    <section className='booklist'>
      <Book
        src={firstBook.src}
        title={firstBook.title}
        author={firstBook.author}
      >
        {/* this is use of children props which is used in  */}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
          doloremque perferendis quae ea molestiae veritatis.
        </p>
        <button type='submit'>submit</button>
      </Book>
      <Book
        src={secondBook.src}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  )
}

// const Book = () => {
//   return (
//     <article className='book'>
//       <img src='./images/image5.jpg' alt='The legend of zelda' />
//       <h1>
//         The Legend of Zelda™: Tears of the Kingdom – The Complete Official
//         Guide: Collector's Edition Hardcove
//       </h1>
//       <h2>Dharmesh Gohil</h2>
//     </article>
//   )
// }
const firstBook = {
  src: './images/image-0.jpg',
  author: 'Vatsal Gohil',
  title: 'dont know',
}
const secondBook = {
  src: './images/image2.jpg',
  author: 'sonal chauhan',
  title: 'bio graphy',
}

// const src = './images/image-0.jpg'
// const author = 'Vatsal  Gohil'
// const title =
//   "The Legend of Zelda™: Tears of the Kingdom – The Complete OfficialGuide: Collector's Edition Hardcove"

const Book = ({ src: image, title, author, children }) => {
  // console.log(props)
  // return (
  //   <article className='book'>
  //     <img src={props.src} alt={props.title} />
  //     <h1>{props.title}</h1>
  //     <h4>{props.author}</h4>
  //     {/* {console.log(props)} */}
  //   </article>
  // ) or
  // const { author, src: image, title } = props
  return (
    <article className='book'>
      <img src={image} alt={title} />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <p> {children}</p>
    </article>
  )
  // console.log(props) hrere we cant pass the props value
}
export default Booklist

// const root = ReactDom.createRoot(document.getElementById('root')) or
const root = ReactDom.createRoot(document.querySelector('#root'))
root.render(<Booklist />)
